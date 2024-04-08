import { Assets, Texture } from "pixi.js";

export async function loadTexture(location: string) {
    const texture = await Assets.load<Texture | undefined>(location);
    if (texture !== undefined) {
        texture.source.scaleMode = "nearest";
    }
    return texture;
}