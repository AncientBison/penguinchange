import { Assets, Spritesheet } from 'pixi.js';

const data = {
    frames: {
        front1: {
            frame: { x: 0, y: 0, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        front2: {
            frame: { x: 16, y: 0, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        front3: {
            frame: { x: 32, y: 0, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        right1: {
            frame: { x: 0, y: 16, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        right2: {
            frame: { x: 16, y: 16, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        left1: {
            frame: { x: 0, y: 32, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        left2: {
            frame: { x: 16, y: 32, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        back1: {
            frame: { x: 0, y: 48, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        back2: {
            frame: { x: 16, y: 48, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        water1: {
            frame: { x: 0, y: 64, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        },
        water2: {
            frame: { x: 16, y: 64, w: 16, h: 16 },
            sourceSize: { w: 16, h: 16 },
            spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
        }
    },
    animations: {
        walkFront: ["front2", "front3"],
        walkBack: ["back1", "back2"],
        walkLeft: ["left1", "left2"],
        walkRight: ["right1", "right2"],
        front: ["front1"],
        back: ["back1"],
        left: ["left1"],
        right: ["right1"],
        water: ["water1", "water2"]
    },
    meta: {
        image: 'penguin.png',
        format: 'RGBA8888',
        size: { w: 128, h: 128 },
        scale: 1
    }
};

export async function getPenguinAnimations() {
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