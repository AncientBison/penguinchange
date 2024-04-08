import { TileFlag } from "./tileFlag";
import { Tilemap, spriteToBounds } from "./tilemap";
import { HoverSprite } from './hoverSprite';
import { Point } from "pixi.js";
import { boundsContains } from "../pointMath";

export class OverlayTilemap extends Tilemap {
    baseTilemap;
    hasHover = true;
    checksBelow;

    constructor(baseTilemap: Tilemap, hoverSprite?: HoverSprite, checksBelow = true) {
        super(baseTilemap.constants.tileSize, baseTilemap.container);
        this.baseTilemap = baseTilemap;
        this.checksBelow = checksBelow;
        
        if (hoverSprite === undefined) {
            this.hasHover = false;
        } else {
            this.hoverSprite = hoverSprite;
        }
    }

    tileAtPositionIsSolid(row: number, col: number) {
        return this.tiles.some(tile => this.tileAtPositionExists(row, col) && tile.flags.includes(TileFlag.SOLID)) && (this.checksBelow ? this.baseTilemap.tileAtPositionIsSolid(row, col) : true);
    }

    tileAtPositionExists(row: number, col: number) {
        return this.tiles.some(tile => tile.row === row && tile.col === col) && (this.checksBelow ? this.baseTilemap.tileAtPositionExists(row, col) : true);
    }

    pointBlockedInBlockingOrNonexistentTiles(point: Point) {
        return super.pointBlockedInBlockingOrNonexistentTiles(point);
    }

    pointInExistentTiles(point: Point) {
        return super.pointInExistentTiles(point) && (this.checksBelow ? this.baseTilemap.pointInExistentTiles(point) : true);
    }

    pointBlockedInBlockingTiles(point: Point) {
        return super.pointBlockedInBlockingTiles(point) || (this.checksBelow ? this.baseTilemap.pointBlockedInBlockingTiles(point) : false);
    }

    set hoverSprite(sprite: HoverSprite | null) {
        this._hoverSprite = sprite;
        this.baseTilemap._hoverSprite = sprite;
    }
}