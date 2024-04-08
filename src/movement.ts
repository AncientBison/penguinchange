import { Ticker } from "pixi.js";
import { Body } from "./body";

export abstract class Movement {
    public abstract tick(ticker: Ticker, body: Body): void;
}