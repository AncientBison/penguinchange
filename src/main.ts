import { Application, Point, Texture } from 'pixi.js';
import { Stage } from './stage';
import { Penguin } from './bodies/penguin';
import { BaseTilemap } from './tilemap/baseTilemap';
import { OverlayTilemap } from './tilemap/overlayTilemap';
import { HoverSprite } from './tilemap/hoverSprite';
import { TileFlag } from './tilemap/tileFlag';
import { getIcebergTextures } from './icebergSpritesheet';
import { getPenguinAnimations } from './penguinSpritesheet';
import { getPowerPlantAnimations } from './powerPlantSpritesheet';
import Tile from './tilemap/tile';
import { OverlayTilemap2x2 } from './tilemap/overlayTilemap2x2';

const TILEMAP_ROWS = 9;
const TILEMAP_COLS = 16;
const ICEBERG_PADDING = 1;
const TILE_SIZE = 80;

export { TILEMAP_ROWS, TILEMAP_COLS, ICEBERG_PADDING, TILE_SIZE };

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new Application();

// Wait for the Renderer to be available
await app.init({
    antialias: false,
    width: 1280,
    height: 720
});

document.body.appendChild(app.canvas);

const waterTilemap = new BaseTilemap(TILE_SIZE, app.stage);

const hoverSprite = new HoverSprite();
await hoverSprite.loadSprite(160);
hoverSprite.addToContainer(app.stage);
const icebergTilemap = new OverlayTilemap(waterTilemap, undefined, false);

const icebergBottomTilemap = new OverlayTilemap(icebergTilemap, undefined);

const powerPlantTilemap = new OverlayTilemap(icebergBottomTilemap, hoverSprite);

const icebergTextures = await getIcebergTextures();
const penguinAnimations = await getPenguinAnimations();
const powerplantAnimations = await getPowerPlantAnimations();

for (let x = 0; x < TILEMAP_COLS; x++) {
    for (let y = 0; y < TILEMAP_ROWS; y++) {
        waterTilemap.createTile(y, x, icebergTextures.textures.water, [], false);
        icebergBottomTilemap.createTile(y, x, icebergTextures.textures.water, [], false);
    }
}

// open sides: top left right bottom
const iceTextureMap: Map<number, Texture[]> = new Map([
    // 1 open
    [0b1000, [icebergTextures.textures.iceTop]],
    [0b0100, [icebergTextures.textures.iceLeft]],
    [0b0010, [icebergTextures.textures.iceRight]],
    [0b0001, [icebergTextures.textures.iceBottom, icebergTextures.textures.iceBottom2]],
    // 2 open
    [0b1100, [icebergTextures.textures.iceTopLeft]],
    [0b1010, [icebergTextures.textures.iceTopRight]],
    [0b1001, [icebergTextures.textures.ice2OpenHorizontal, icebergTextures.textures.ice2OpenHorizontal2]],
    [0b0110, [icebergTextures.textures.ice2OpenVertical]],
    [0b0101, [icebergTextures.textures.iceBottomLeft, icebergTextures.textures.iceBottomLeft2]],
    [0b0011, [icebergTextures.textures.iceBottomRight, icebergTextures.textures.iceBottomRight2]],
    // 3 open
    [0b0111, [icebergTextures.textures.ice3OpenTop, icebergTextures.textures.ice3OpenTop2]],
    [0b1011, [icebergTextures.textures.ice3OpenLeft, icebergTextures.textures.ice3OpenLeft2]],
    [0b1101, [icebergTextures.textures.ice3OpenRight, icebergTextures.textures.ice3OpenRight2]],
    [0b1110, [icebergTextures.textures.ice3OpenBottom]],
    // 4 open
    [0b1111, [icebergTextures.textures.ice4Open, icebergTextures.textures.ice4Open2]]
]);

const defaultCoalPowerPlants = [new Point(7, 3)];

for (let x = ICEBERG_PADDING; x < TILEMAP_COLS - ICEBERG_PADDING; x++) {
    for (let y = ICEBERG_PADDING; y < TILEMAP_ROWS - ICEBERG_PADDING; y++) {
        icebergTilemap.createTile(y, x, getIcebergTexture(y, x), [], false);

        retextureIcebergTile(y, x, true);

        if (defaultCoalPowerPlants.some(point => point.x === x && point.y === y)) {
            powerPlantTilemap.createTile(y, x, powerplantAnimations["coal"][0], [ TileFlag.BLOCKING ], true);
        } else {
            powerPlantTilemap.createTile(y, x, Texture.EMPTY, [], true);
        }
    }
}

function getIcebergTexture(row: number, col: number) {
    const isBottom = row == TILEMAP_ROWS - (ICEBERG_PADDING * 2);
    const isTop = row == ICEBERG_PADDING;
    const isRight = col == TILEMAP_COLS - (ICEBERG_PADDING * 2);
    const isLeft = col == ICEBERG_PADDING;

    if (!isBottom && !isTop && !isRight && !isLeft) {
        return icebergTextures.textures.iceMiddle;
    }
    if (isBottom) {
        if (isLeft) {
            return icebergTextures.textures.iceBottomLeft;
        }
        if (isRight) {
            return icebergTextures.textures.iceBottomRight;
        }
        return icebergTextures.textures.iceBottom;
    }
    if (isTop) {
        if (isLeft) {
            return icebergTextures.textures.iceTopLeft;
        }
        if (isRight) {
            return icebergTextures.textures.iceTopRight;
        }
        return icebergTextures.textures.iceTop;
    }
    if (isLeft) {
        return icebergTextures.textures.iceLeft;
    }
    return icebergTextures.textures.iceRight;
}

const stage = new Stage(app);

const numberOfPenguins = 100;

for (let i = 0; i < numberOfPenguins; i++) {
    stage.addBody(new Penguin(new Point((Math.random() * ((TILEMAP_COLS - 2) - 1 * ICEBERG_PADDING) + 2) * TILE_SIZE, (Math.random() * ((TILEMAP_ROWS - 2) - 2 * ICEBERG_PADDING) + 2) * TILE_SIZE), penguinAnimations, powerPlantTilemap));
}

let emissions = 200;
const MAX_ICE_BREAK_RANDOM = 0.00001;

stage.gameTicker = (ticker) => {
    const breakIce =  Math.random() < MAX_ICE_BREAK_RANDOM * emissions;

    if (breakIce) {
        const edgeIcebergs = [];
        for (const icebergTile of icebergTilemap.tiles) {
            if (icebergTileIsEdge(icebergTile)) {
                edgeIcebergs.push(icebergTile);
            }
        }

        const brokenIcebergTile = edgeIcebergs[Math.floor(Math.random() * edgeIcebergs.length)];
        if (brokenIcebergTile) {
            icebergTilemap.removeTileAtPosition(brokenIcebergTile.row, brokenIcebergTile.col);
            powerPlantTilemap.removeTileAtPosition(brokenIcebergTile.row, brokenIcebergTile.col);

            if (!icebergTileExists(brokenIcebergTile.row + 1, brokenIcebergTile.col)) {
                icebergBottomTilemap.retextureTile(brokenIcebergTile.row + 1, brokenIcebergTile.col, icebergTextures.textures.water);
            }

            const offsets = [
                { row: -1, col: 0 }, // Top
                { row: 0, col: 1 },  // Right
                { row: 1, col: 0 },  // Bottom
                { row: 0, col: -1 }  // Left
            ];
    
            for (const offset of offsets) {
                const adjacentRow = brokenIcebergTile.row + offset.row;
                const adjacentCol = brokenIcebergTile.col + offset.col;
    
                if (icebergTileExists(adjacentRow, adjacentCol)) {
                    retextureIcebergTile(adjacentRow, adjacentCol);
                }
            }
        }
    }
};

function retextureIcebergTile(row: number, col: number, initializing?: boolean) {
    let textures: Texture[];
    if (initializing) {
        const leftOpen = col == ICEBERG_PADDING;
        const rightOpen = col == TILEMAP_COLS - (ICEBERG_PADDING * 2);
        const bottomOpen = row == TILEMAP_ROWS - (ICEBERG_PADDING * 2);

        textures = iceTextureMap.get(boolsToNumber(false, leftOpen, rightOpen, bottomOpen)) ?? [];
    } else {
        const topOpen = !icebergTileExists(row - 1, col);
        const leftOpen = !icebergTileExists(row, col - 1);
        const rightOpen = !icebergTileExists(row, col + 1);
        const bottomOpen = !icebergTileExists(row + 1, col);

        textures = iceTextureMap.get(boolsToNumber(topOpen, leftOpen, rightOpen, bottomOpen)) ?? [];
    }
    
    
    if (textures.length > 0) {
        if (!initializing) {
            icebergTilemap.retextureTile(row, col, textures[0]);
        }
        if (textures.length > 1) {
            icebergBottomTilemap.retextureTile(row + 1, col, textures[1]);
        }
    }
}

function boolsToNumber(bool1: boolean, bool2: boolean, bool3: boolean, bool4: boolean): number {
    return (Number(bool1) << 3) | (Number(bool2) << 2) | (Number(bool3) << 1) | Number(bool4);
}

function icebergTileExists(row: number, col: number) {
    return icebergTilemap.tileAtPositionExists(row, col);
}

function icebergTileIsEdge(tile: Tile) {    
    return !icebergTilemap.tileAtPositionExists(tile.row - 1, tile.col) ||
           !icebergTilemap.tileAtPositionExists(tile.row + 1, tile.col) ||
           !icebergTilemap.tileAtPositionExists(tile.row, tile.col - 1) ||
           !icebergTilemap.tileAtPositionExists(tile.row, tile.col + 1);
}