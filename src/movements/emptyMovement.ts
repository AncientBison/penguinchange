import { Ticker } from 'pixi.js';
import { Movement } from "../movement";
import { Body } from '../body';

export class EmptyMovement extends Movement {
    tick(ticker: Ticker, body: Body) {}
}