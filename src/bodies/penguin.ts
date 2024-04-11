import { AnimatedSprite, Point, Texture, Ticker } from "pixi.js";
import { Body } from "../body";
import { PenguinMovement } from "../movements/penguinMovement";
import { TILE_SIZE } from "../main";
import { Tilemap } from "../tilemap/tilemap";
import { Direction } from "../direction";
import { EmptyMovement } from "../movements/emptyMovement";

type PenguinAnimations = "walkFront" | "walkBack" | "walkLeft" | "walkRight" | "front" | "back" | "left" | "right" | "water";

export class Penguin extends Body {
    textureLocation = "";
    animations: Record<PenguinAnimations, Texture[]>;
    declare sprite: AnimatedSprite;
    tilemap;
    beingHeld: boolean = false;
    pickedUpPoint = new Point(-1, -1);
    isInWater: boolean = false;

    constructor(position: Point, animations: Record<PenguinAnimations, Texture[]>, tilemap: Tilemap) {
        super(position, new PenguinMovement(tilemap));
        this.tilemap = tilemap;
        this.animations = animations;
    }

    async loadSprite() {
        this.sprite = new AnimatedSprite(this.animations["front"]);
        this.sprite.animationSpeed = 0.1;
        this.sprite.play();
        this.sprite.height = TILE_SIZE;
        this.sprite.width = TILE_SIZE;
        this.sprite.anchor.set(1, 1.2);

        this.sprite.addEventListener("pointerdown", () => {
            this.beingHeld = true;
            this.movement = new EmptyMovement();
            this.direction = Direction.DOWN;
            this.previousDirection = Direction.DOWN;
            this.sprite.animationSpeed = 0.3;
            this.sprite.zIndex = 100000;
            this.pickedUpPoint = this.position;
        });

        this.sprite.addEventListener("pointerupoutside", () => {
            this.dropPenguin();
        });

        this.sprite.addEventListener("pointerup", () => {
            this.dropPenguin();
        });

        this.sprite.addEventListener("globalpointermove", (e) => {
            if (this.beingHeld) {
                this.position = new Point(e.globalX + this.sprite.width / 2, e.globalY + this.sprite.height / 2);
            }
        });

        this.sprite.cursor = "pointer";
        this.sprite.eventMode = "static";
    }

    private dropPenguin() {
        if (this.tilemap.pointBlockedInBlockingOrNonexistentTiles(this.position)) {
            this.position = this.pickedUpPoint;
        }
        
        this.beingHeld = false;
        this.movement = new PenguinMovement(this.tilemap);
        this.sprite.animationSpeed = 0.1;
    }

    mainLoop() {
        if (!this.beingHeld) {
            this.sprite.zIndex = this.position.y;
        }
        let newTextures;
        if (this.isInWater) {
            newTextures = this.animations["water"];   
        } else {
            switch (this.direction) {
                case Direction.UP:
                    newTextures = this.animations["walkBack"];
                    break;
                case Direction.DOWN:
                    newTextures = this.animations["walkFront"];
                    break;
                case Direction.LEFT:
                    newTextures = this.animations["walkLeft"];
                    break;
                case Direction.RIGHT:
                    newTextures = this.animations["walkRight"];
                    break;
                case Direction.NONE:
                    switch (this.previousDirection) {
                        case Direction.UP:
                            newTextures = this.animations["back"];
                            break;
                        case Direction.DOWN:
                            newTextures = this.animations["front"];
                            break;
                        case Direction.LEFT:
                            newTextures = this.animations["left"];
                            break;
                        case Direction.RIGHT:
                            newTextures = this.animations["right"];
                            break;
                    }
            }
        }
        
        if (newTextures !== this.sprite.textures && newTextures) {
            this.sprite.textures = newTextures;
            this.sprite.play();
        }
    }

    preLoop(ticker: Ticker): void {
        this.isInWater = this.tilemap.pointBlockedInBlockingOrNonexistentTiles(this.position) && !this.beingHeld;
        if (this.isInWater) {
            this.movement = new EmptyMovement();
            this.sprite.animationSpeed = 0.03;
        } else if (this.movement instanceof EmptyMovement && !this.beingHeld) {
            this.movement = new PenguinMovement(this.tilemap);
            this.sprite.animationSpeed = 0.1;
        }
    }
}