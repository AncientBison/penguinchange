import { Bounds, BoundsData, Point, Rectangle } from "pixi.js";

export function addPoints(a: Point, b: Point) {
    return new Point(a.x + b.x, a.y + b.y);
}

export function subtractPoints(a: Point, b: Point) {
    return new Point(a.x - b.x, a.y - b.y);
}

export function multiplyPoints(a: Point, b: Point) {
    return new Point(a.x * b.x, a.y * b.y);
}

export function equalPoints(a: Point, b: Point) {
    return a.x === b.x && a.y === b.y;
}

export function distancePoints(a: Point, b: Point) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}

export function boundsContains(rect: BoundsData, point: Point) {
    return (
      point.x >= rect.minX &&
      point.x <= rect.maxX &&
      point.y >= rect.minY &&
      point.y <= rect.maxY
    );
  }
