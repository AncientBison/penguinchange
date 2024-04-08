import { Container, Point, Sprite, Texture } from "pixi.js";
import Tile from "./tile";
import { HoverSprite } from './hoverSprite';
import { TileFlag } from './tileFlag';
import { boundsContains } from '../pointMath';

export abstract class Tilemap {
    constants: TilemapConstants;
    tiles: Tile[] = [];
    _hoverSprite: HoverSprite | null = null;
    container;

    abstract hasHover: boolean;

    constructor(tileSize: number, container: Container) {
        this.constants = {
            gridSize: tileSize,
            tileSize,
            tileOrgin: new Point(tileSize / 2, tileSize / 2)
        };
        this.container = container;
    }

    createTile(row: number, col: number, texture: Texture, flags: TileFlag[], interactable: boolean) {
        if (this.tileAtPositionExists(row, col)) {
            return false;
        }

        const tile = new Tile(row, col, texture, this, flags, interactable);
        this.tiles.push(tile);
        tile.addToContainer(this.container);
        return true;
    }

    tileAtPositionIsSolid(row: number, col: number) {
        return this.tiles.some(tile => this.tileAtPositionExists(row, col) && tile.flags.includes(TileFlag.SOLID));
    }

    tileAtPositionExists(row: number, col: number) {
        return this.tiles.some(tile => tile.row === row && tile.col === col);
    }

    pointBlockedInBlockingOrNonexistentTiles(point: Point) {
        return (!this.pointInExistentTiles(point)) || this.pointBlockedInBlockingTiles(point);
    }

    pointInExistentTiles(point: Point) {
        return this.tiles.some(tile => boundsContains(spriteToBounds(tile.sprite), point));
    }

    pointBlockedInBlockingTiles(point: Point) {
        return this.tiles.filter(tile => tile.flags.includes(TileFlag.BLOCKING)).some(tile => boundsContains(spriteToBounds(tile.sprite), point));
    }

    removeTileAtPosition(row: number, col: number) {
        const index = this.tiles.findIndex(tile => tile.row === row && tile.col === col);
        // console.log(this.tiles[index]);

        if (index === -1) {
            return;
        }
        
        this.tiles[index].destroy();
        this.tiles.splice(index, 1);
    }

    retextureTile(row: number, col: number, texture: Texture) {
        const tile = this.tiles.find(tile => tile.row === row && tile.col === col);
        if (tile === undefined) {
            return;
        }

        tile.sprite.texture = texture;
    }

    get hoverSprite() {
        return this._hoverSprite;
    }

    set hoverSprite(sprite: HoverSprite | null) {
        this._hoverSprite = sprite;
    }
}

export type TilemapConstants = {
    gridSize: number;
    tileSize: number;
    tileOrgin: Point;
}

export function spriteToBounds(sprite: Sprite) {
    return {
      maxX: sprite.x + sprite.width,
      minX: sprite.x,
      maxY: sprite.y + sprite.height,
      minY: sprite.y,
    };
  }