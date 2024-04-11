import { Assets, Spritesheet } from 'pixi.js';

const data = {
    frames: {
        water: {
            frame: { x: 0, y: 0, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        iceTopLeft: {
            frame: { x: 16, y: 0, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        iceTop: {
            frame: { x: 32, y: 0, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        iceTopRight: {
            frame: { x: 48, y: 0, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        iceLeft: {
            frame: { x: 16, y: 16, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        iceMiddle: {
            frame: { x: 32, y: 16, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        iceRight: {
            frame: { x: 48, y: 16, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        iceBottomLeft: {
            frame: { x: 16, y: 32, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        iceBottomLeft2: {
            frame: { x: 16, y: 48, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        iceBottom: {
            frame: { x: 32, y: 32, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        iceBottom2: {
            frame: { x: 32, y: 48, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        iceBottomRight: {
            frame: { x: 48, y: 32, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        iceBottomRight2: {
            frame: { x: 48, y: 48, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ice4Open: {
            frame: { x: 0, y: 64, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ice4Open2: {
            frame: { x: 0, y: 80, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ice2OpenHorizontal: {
            frame: { x: 16, y: 64, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ice2OpenHorizontal2: {
            frame: { x: 16, y: 80, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ice2OpenVertical: {
            frame: { x: 32, y: 64, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ice3OpenTop: {
            frame: { x: 48, y: 64, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ice3OpenTop2: {
            frame: { x: 48, y: 80, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ice3OpenLeft: {
            frame: { x: 64, y: 64, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ice3OpenLeft2: {
            frame: { x: 64, y: 80, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ice3OpenRight: {
            frame: { x: 80, y: 64, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ice3OpenRight2: {
            frame: { x: 80, y: 80, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        ice3OpenBottom: {
            frame: { x: 96, y: 64, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        }
    },
    meta: {
        image: 'icebergtiles.png',
        format: 'RGBA8888',
        size: { w: 128, h: 128 },
        scale: 1
    }
};

export async function getIcebergTextures() {
    // Create the SpriteSheet from data and image
    const spritesheet = new Spritesheet(
        await Assets.load(data.meta.image),
        data
    );

    // spritesheet.textures["iceBottom"].

    // Object.keys(spritesheet.textures).forEach((textureName) => {
    //     const textureKey = textureName as keyof typeof spritesheet.textures;
    //     const texture = spritesheet.textures[textureKey];

    // });

    // Generate all the Textures asynchronously
    await spritesheet.parse();


    for (const textureName in spritesheet.textures) {
        const textureKey = textureName as keyof typeof spritesheet.textures;
        const texture = spritesheet.textures[textureKey];

        texture.source.scaleMode = "nearest";
    }

    return spritesheet;
}