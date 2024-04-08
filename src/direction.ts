import { Point } from 'pixi.js';

export enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    UP_LEFT,
    UP_RIGHT,
    DOWN_LEFT,
    DOWN_RIGHT,
    NONE
};

export function directionToPoint(direction: Direction): Point {
    switch (direction) {
        case Direction.UP:
            return new Point(0, -1);
        case Direction.DOWN:
            return new Point(0, 1);
        case Direction.LEFT:
            return new Point(-1, 0);
        case Direction.RIGHT:
            return new Point(1, 0);
        case Direction.UP_LEFT:
            return new Point(-1, -1);
        case Direction.UP_RIGHT:
            return new Point(1, -1);
        case Direction.DOWN_LEFT:
            return new Point(-1, 1);
        case Direction.DOWN_RIGHT:
            return new Point(1, 1);
        case Direction.NONE:
        default:
            return new Point(0, 0);
    }
}

export function pointToDirection(point: Point): Direction {
    if (point.x === 0 && point.y === -1) {
        return Direction.UP;
    } else if (point.x === 0 && point.y === 1) {
        return Direction.DOWN;
    } else if (point.x === -1 && point.y === 0) {
        return Direction.LEFT;
    } else if (point.x === 1 && point.y === 0) {
        return Direction.RIGHT;
    } else if (point.x === -1 && point.y === -1) {
        return Direction.UP_LEFT;
    } else if (point.x === 1 && point.y === -1) {
        return Direction.UP_RIGHT;
    } else if (point.x === -1 && point.y === 1) {
        return Direction.DOWN_LEFT;
    } else if (point.x === 1 && point.y === 1) {
        return Direction.DOWN_RIGHT;
    } else {
        return Direction.NONE;
    }
}

const noneDirectionChance = 0.4;

export function getWeightedRandomDirection() {
    const directions = [
        Direction.UP,
        Direction.DOWN,
        Direction.LEFT,
        Direction.RIGHT,
        Direction.UP_LEFT,
        Direction.UP_RIGHT,
        Direction.DOWN_LEFT,
        Direction.DOWN_RIGHT
    ];

    if (Math.random() < noneDirectionChance) {
        return Direction.NONE;
    } else {
        const randomIndex = Math.floor(Math.random() * directions.length);
        return directions[randomIndex];
    }
}


export function getRandomStraightDirection() {
    const directions = [
        Direction.UP,
        Direction.DOWN,
        Direction.LEFT,
        Direction.RIGHT,
    ];

    if (Math.random() < noneDirectionChance) {
        return Direction.NONE;
    } else {
        const randomIndex = Math.floor(Math.random() * directions.length);
        return directions[randomIndex];
    }
}
