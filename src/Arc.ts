// 曲线， 基类
import { FACTOR } from './config';
import { Context } from './store';
import { getDistance } from './utils';

export interface ArcProps {
  from: [number, number]
  to: [number, number]
  width: number
  color: string,
  ctx?: Context
}

class Arc {
  startX: number
  startY: number
  endX: number
  endY: number
  centerX: number
  centerY: number
  startAngle: number
  endAngle: number
  radius: number
  color: string
  lineWidth: number = 1
  ctx: Context

  constructor(options: ArcProps) {
    const { from, to, width, color = '#fff', ctx } = options;
    const [startX, startY] = from;
    const [endX, endY] = to;
    this.ctx = ctx;

    // 两点之间的圆有多个，通过两点及半径便可以定出两个圆，根据需要选取其中一个圆
    const l = getDistance(startX - endX, startY - endY);

    const m = (startX + endX) / 2; // 横轴中点
    const n = (startY + endY) / 2; // 纵轴中点
    const centerX = (startY - endY) * FACTOR + m;
    const centerY = (endX - startX) * FACTOR + n;
    const radius = getDistance(l / 2, l * FACTOR);

    const startAngle = Math.atan2(startY - centerY, startX - centerX);
    const endAngle = Math.atan2(endY - centerY, endX - centerX);

    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.centerX = centerX;
    this.centerY = centerY;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.radius = radius;
    this.color = color;
    this.lineWidth = width || 1;
  }

  draw(context: CanvasRenderingContext2D): void {}
}

export default Arc;
