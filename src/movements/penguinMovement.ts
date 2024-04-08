import { Ticker, Point } from 'pixi.js';
import { Direction, directionToPoint, getRandomStraightDirection } from '../direction';
import { Movement } from "../movement";
import { Body } from '../body';
import { Tilemap } from '../tilemap/tilemap';
import { addPoints, multiplyPoints } from '../pointMath';

const minMovementTimeMs = 750;
const maxMovementTimeMs = 3750;
const ICEBERG_EDGE_PADDING = 25;

export class PenguinMovement extends Movement {
    direction = Direction.NONE;
    timeLeftInMovementMs = -1;
    tilemap;

    constructor(tilemap: Tilemap) {
        super();
        this.tilemap = tilemap;
        this.direction = Direction.NONE;
    }   

    tick(ticker: Ticker, body: Body) {
        if (this.timeLeftInMovementMs <= 0) {
            this.direction = getRandomStraightDirection();
            this.timeLeftInMovementMs = (Math.random() * (maxMovementTimeMs - minMovementTimeMs) + minMovementTimeMs);
        }

        let movement = multiplyPoints(directionToPoint(this.direction), new Point(ticker.deltaTime, ticker.deltaTime));

        while(!this.canMoveForward(body, movement)) {
            this.direction = getRandomStraightDirection();
            movement = multiplyPoints(directionToPoint(this.direction), new Point(ticker.deltaTime, ticker.deltaTime));
        }

        this.timeLeftInMovementMs -= ticker.deltaMS;

        body.move(movement);

        if (body.direction !== this.direction) {
            body.previousDirection = body.direction;
            body.direction = this.direction;
        }
    }

    canMoveForward(body: Body, movement: Point) {
        const paddingPoint = multiplyPoints(directionToPoint(this.direction), new Point(ICEBERG_EDGE_PADDING, ICEBERG_EDGE_PADDING));
        return !this.tilemap.pointBlockedInBlockingOrNonexistentTiles(addPoints(addPoints(body.position, movement), paddingPoint));
    }
}