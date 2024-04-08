import { Container, Point, Texture } from "pixi.js";
import Tile from "./tile";
import { TileFlag } from './tileFlag';
import { Tilemap } from "./tilemap";

export abstract class Tilemap2x2 extends Tilemap {
    constructor(tileSize: number, container: Container) {
        super(tileSize, container);
        this.constants = {
            gridSize: tileSize,
            tileSize: tileSize * 2,
            tileOrgin: new Point(tileSize / 2, tileSize / 2)
        };
    }

    createTile(row: number, col: number, texture: Texture, flags: TileFlag[], interactable: boolean) {
        if (this.tileAtPositionExists(row, col) && this.tileAtPositionExists(row + 1, col) && this.tileAtPositionExists(row, col + 1) && this.tileAtPositionExists(row + 1, col + 1)) {
            return false;
        }

        const tiles = [
            new Tile(row, col, texture, this, flags, interactable),
            new Tile(row + 1, col, texture, this, flags, interactable),
            new Tile(row, col + 1, texture, this, flags, interactable),
            new Tile(row + 1, col + 1, texture, this, flags, interactable)
        ];

        for (const tile of tiles) {
            this.tiles.push(tile);
            tile.addToContainer(this.container);
        }

        return true;
    }
}