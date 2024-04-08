import { Application, Renderer, TickerCallback } from 'pixi.js';
import { Body } from "./body";

export class Stage {
    bodyTickers: Map<Body, TickerCallback<any>> = new Map();
    private _gameTicker: TickerCallback<any> = () => {};
    app: Application<Renderer>;

    constructor(app: Application<Renderer>) {
        this.app = app;
        this.app.ticker.add(this._gameTicker);
    }

    async addBody(body: Body) {
        await body.loadSprite();
        body.addToContainer(this.app.stage);

        const tickerCallback: TickerCallback<any> = () => { body.tick(this.app.ticker) };
        const index = this.app.ticker.add(tickerCallback);
        if (index !== undefined) {
            this.bodyTickers.set(body, tickerCallback);
        }
    }

    set gameTicker(gameTicker: TickerCallback<any>) {
        this.app.ticker.remove(this._gameTicker);
        this.app.ticker.add(gameTicker);
        this._gameTicker = gameTicker;
    }

    removeBody(body: Body) {
        body.destroy();
        const tickerCallback = this.bodyTickers.get(body);
        if (tickerCallback !== undefined) {
            this.app.ticker.remove(tickerCallback);
            this.bodyTickers.delete(body);
        }
    }
}