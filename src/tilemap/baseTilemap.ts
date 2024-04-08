import { TileFlag } from "./tileFlag";
import { Tilemap } from "./tilemap";

export class BaseTilemap extends Tilemap {
    hasHover = false;

    tileAtPositionIsSolid(row: number, col: number): boolean {
        return this.tiles.some(tile => tile.row === row && tile.col === col && tile.flags.includes(TileFlag.SOLID));
    }
}