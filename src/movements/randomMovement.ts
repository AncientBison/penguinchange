import { Ticker } from 'pixi.js';
import { Direction, directionToPoint, getWeightedRandomDirection } from '../direction';
import { Movement } from "../movement";
import { Body } from '../body';

const minMovementTimeMs = 750;
const maxMovementTimeMs = 3750;
const timeBetweenMovementMs = 400;

export class RandomMovement extends Movement {
    direction: Direction = Direction.NONE;
    timeLeftInMovementMs: number = 0;

    tick(ticker: Ticker, body: Body) {
        if (this.timeLeftInMovementMs <= -timeBetweenMovementMs) {
            this.direction = getWeightedRandomDirection();
            this.timeLeftInMovementMs = (Math.random() * (maxMovementTimeMs - minMovementTimeMs) + minMovementTimeMs);
        }

        this.timeLeftInMovementMs -= ticker.deltaMS;

        console.log(this.timeLeftInMovementMs);
        body.move(directionToPoint(this.direction));
    }
}