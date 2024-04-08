import { Sprite, Point, Container } from "pixi.js";
import { spriteNotInitializedError } from "../errors";
import { loadTexture } from "../loadTexture";
import { TILE_SIZE } from "../main";
import { Tilemap } from "./tilemap";

const HOVER_SPRITE_TEXTURE = "hover.png";

const hoverSpriteZIndex = 999;

export class HoverSprite {
    sprite: Sprite | null = null;
    position = new Point(0, 0);;
    
    async loadSprite(size: number) {
        this.sprite = new Sprite(await loadTexture(HOVER_SPRITE_TEXTURE));
        this.sprite.zIndex = hoverSpriteZIndex;
        this.sprite.height = size;
        this.sprite.width = size;
        this.sprite.anchor.set(0.5);
        this.sprite.visible = false;
    }

    public addToContainer(container: Container) {
        if (this.sprite === null) {
            throw spriteNotInitializedError; 
        }
        container.addChild(this.sprite);
    }

    public setPosition(position: Point, tilemap: Tilemap) {
        if (this.sprite === null) {
            throw spriteNotInitializedError;
        }

        console.log(position.x, position.y);

        const valid = !tilemap.pointBlockedInBlockingOrNonexistentTiles(new Point((position.x) * TILE_SIZE, (position.y) * TILE_SIZE)) &&
                !tilemap.pointBlockedInBlockingOrNonexistentTiles(new Point((position.x + 1) * TILE_SIZE, (position.y) * TILE_SIZE)) &&
                !tilemap.pointBlockedInBlockingOrNonexistentTiles(new Point((position.x) * TILE_SIZE, (position.y + 1) * TILE_SIZE)) &&
                !tilemap.pointBlockedInBlockingOrNonexistentTiles(new Point((position.x + 1) * TILE_SIZE, (position.y + 1) * TILE_SIZE));

        if (!valid) {
            this.sprite.tint = 0xff0000
        } else {
            console.log("hi");
            this.sprite.tint = 0xffffff
        }

        this.sprite.visible = true;
        this.sprite.position.set((position.x) * TILE_SIZE, (position.y) * TILE_SIZE);
    }

    public hide() {
        if (this.sprite === null) {
            throw spriteNotInitializedError; 
        }
        this.sprite.visible = false;
    }

    public show() {
        if(this.sprite === null) {
            throw spriteNotInitializedError; 
        }
        this.sprite.visible = true;
    }
}