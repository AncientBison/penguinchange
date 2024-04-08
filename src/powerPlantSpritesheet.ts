import { Assets, Spritesheet } from 'pixi.js';

const data = {
    frames: {
        solar1: {
            frame: { x: 0, y: 0, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        coal1: {
            frame: { x: 0, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        coal2: {
            frame: { x: 32, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        coal3: {
            frame: { x: 64, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        coal4: {
            frame: { x: 96, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        coal5: {
            frame: { x: 128, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        coal6: {
            frame: { x: 160, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        coal7: {
            frame: { x: 192, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        coal8: {
            frame: { x: 224, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        coal9: {
            frame: { x: 256, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear1: {
            frame: { x: 0, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear2: {
            frame: { x: 32, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear3: {
            frame: { x: 64, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear4: {
            frame: { x: 96, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear5: {
            frame: { x: 128, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear6: {
            frame: { x: 160, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear7: {
            frame: { x: 192, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear8: {
            frame: { x: 224, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear9: {
            frame: { x: 256, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear10: {
            frame: { x: 288, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear11: {
            frame: { x: 320, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear12: {
            frame: { x: 352, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear13: {
            frame: { x: 384, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear14: {
            frame: { x: 416, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear15: {
            frame: { x: 448, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear16: {
            frame: { x: 480, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear17: {
            frame: { x: 512, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear18: {
            frame: { x: 544, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear19: {
            frame: { x: 576, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear20: {
            frame: { x: 608, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear21: {
            frame: { x: 640, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        nuclear22: {
            frame: { x: 672, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        wind1: {
            frame: { x: 0, y: 96, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        wind2: {
            frame: { x: 32, y: 96, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        wind3: {
            frame: { x: 64, y: 96, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        wind4: {
            frame: { x: 96, y: 96, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
    },
    animations: {
        solar: ["solar1"],
        coal: ["coal1", "coal2", "coal3", "coal4", "coal5", "coal6", "coal7", "coal8", "coal9"],
        nuclear: ["nuclear1", "nuclear2", "nuclear3", "nuclear4", "nuclear5", "nuclear6", "nuclear7", "nuclear8", "nuclear9", "nuclear10", "nuclear11", "nuclear12", "nuclear13", "nuclear14", "nuclear15", "nuclear16", "nuclear17", "nuclear18", "nuclear19", "nuclear20", "nuclear21", "nuclear22"],
        wind: ["wind1", "wind2", "wind3", "wind4"]
    },
    meta: {
        image: 'powerPlants.png',
        format: 'RGBA8888',
        size: { w: 704, h: 128 },
        scale: 1
    }
};

export async function getPowerPlantAnimations() {
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

    return spritesheet.animations;
}