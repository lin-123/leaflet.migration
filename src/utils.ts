import { FACTOR } from './config';

export function getDistance(width: number, height: number) {
  const pow = (length: number) => length * length;
  return Math.sqrt(pow(width) + pow(height));
}

export function getLineCenter(start: number, end: number) {
  const center = (start + end) / 2;
  return (start - end) * FACTOR + center;
}

export function extend(arr: Array<any>, handler: (i: any) => number): [number, number] {
  let min: number = 0;
  let max: number = 0;
  arr.forEach((i: any) => {
    const value = handler(i);
    if (min === undefined) {
      max = value;
      min = value;
    } else {
      if (min > value) min = value;
      if (max < value) max = value;
    }
  });
  return [min, max];
}

export function getType(target: any) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

export class CanvasCache {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D | null
  target: HTMLCanvasElement
  targetCtx: CanvasRenderingContext2D | null

  constructor(target: HTMLCanvasElement) {
    this.target = target;
    this.targetCtx = target.getContext('2d');
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    const { width, height } = this.target;
    Object.assign(this.canvas, {
      width,
      height,
    });
  }

  clear() {
    const { width, height } = this.target;
    Object.assign(this.canvas, {
      width,
      height,
    });
    this.ctx?.clearRect(0, 0, width, height);
  }

  restore() {
    this.targetCtx?.drawImage(this.canvas, 0, 0);
  }
}
