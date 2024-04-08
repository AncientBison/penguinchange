import { Container, Point, Sprite, Ticker } from "pixi.js";
import { Movement } from "./movement";
import { addPoints } from "./pointMath";
import { spriteNotInitializedError } from "./errors";
import { loadTexture } from "./loadTexture";
import { Direction } from "./direction";

export abstract class Body {
    position;
    sprite: Sprite | null = null;
    abstract textureLocation: string;
    movement;
    direction = Direction.NONE;
    previousDirection = Direction.NONE;

    constructor(position: Point, movement: Movement) {
        this.position = position;
        this.movement = movement
    }

    async loadSprite() {
        this.sprite = new Sprite(await loadTexture(this.textureLocation));
    }

    public move(offset: Point) {
        this.position = addPoints(this.position, offset);
    }

    public applyMovement(ticker: Ticker) {
        this.movement.tick(ticker, this);
        if (this.sprite === null) {
            throw spriteNotInitializedError;
        }
        this.sprite.position = this.position;
    }

    public abstract mainLoop(ticker: Ticker): void;
    public abstract preLoop(ticker: Ticker): void;

    public tick(ticker: Ticker) {
        this.preLoop(ticker);
        this.applyMovement(ticker);
        this.mainLoop(ticker)
    };

    public addToContainer(container: Container) {
        if (this.sprite === null) {
            throw spriteNotInitializedError; 
        }
        container.addChild(this.sprite);
    }

    public destroy() {
        this.sprite?.destroy();
    }
}