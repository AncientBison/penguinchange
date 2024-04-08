import { Point } from "pixi.js";
import { HoverSprite } from "./hoverSprite";
import { Tilemap } from "./tilemap";
import { Tilemap2x2 } from "./tilemap2x2";
import { TileFlag } from "./tileFlag";

export class OverlayTilemap2x2 extends Tilemap2x2 {
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
            this._hoverSprite = hoverSprite;
        }
    }

    tileAtPositionIsSolid(row: number, col: number) {
        return this.tiles.some(tile => this.tileAtPositionExists(row, col) && tile.flags.includes(TileFlag.SOLID)) && (this.checksBelow ? this.baseTilemap.tileAtPositionIsSolid(row, col) : true);
    }

    tileAtPositionExists(row: number, col: number) {
        return this.tiles.some(tile => tile.row === row && tile.col === col) && (this.checksBelow ? this.baseTilemap.tileAtPositionExists(row, col) : true);
    }

    pointBlockedInBlockingOrNonexistentTiles(point: Point) {
        return super.pointBlockedInBlockingOrNonexistentTiles(point) && (this.checksBelow ? this.baseTilemap.pointBlockedInBlockingOrNonexistentTiles(point) : true);
    }
}