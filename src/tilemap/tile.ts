import { Container, Point, Sprite, Texture } from 'pixi.js';
import { Tilemap } from './tilemap';
import { TileFlag } from './tileFlag';

export default class Tile {
    sprite;
    row;
    col;
    flags: TileFlag[] = [];
    tilemapConstants;

    constructor(row: number, col: number, texture: Texture, tilemap: Tilemap, flags: TileFlag[], interactable: boolean) {
        this.row = row;
        this.col = col;
        this.flags = flags;

        this.tilemapConstants = tilemap.constants;

        this.sprite = new Sprite(texture);
        this.sprite.anchor.set(0.5);
        this.sprite.height = this.tilemapConstants.tileSize;
        this.sprite.width = this.tilemapConstants.tileSize;
        this.sprite.position.set(
            this.tilemapConstants.tileOrgin.x + (col * this.tilemapConstants.gridSize),
            this.tilemapConstants.tileOrgin.y + Math.abs(this.tilemapConstants.gridSize - this.tilemapConstants.tileSize) + (row * this.tilemapConstants.gridSize)
        );

        if (interactable) {
            this.sprite.on("click", (e) => {
                console.log("c", this.sprite.position.x, this.sprite.position.y);
                console.log("rc", this.row, this.col);
                console.log('flags', this.flags)
            });
            
            this.sprite.on("mouseenter", () => {
                if (tilemap._hoverSprite !== null) {
                    console.log(tilemap);
                    tilemap._hoverSprite.setPosition(new Point(this.col, this.row), tilemap);
                }
            });

            this.sprite.on("mouseleave", () => {
                if (tilemap._hoverSprite !== null) {
                    tilemap._hoverSprite.hide();
                }
            });
        }
        
        this.sprite.eventMode = "static";
    }

    addToContainer(container: Container) {
        container.addChild(this.sprite);
    }

    destroy() {
        this.sprite?.destroy();
    }
}