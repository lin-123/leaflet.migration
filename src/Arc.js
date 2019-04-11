// 曲线， 基类
import { FACTOR } from './config';
import { getDistance } from './utils';

class Arc {
  constructor(options) {
    const {
      startX, startY, endX, endY, width, color = '#fff'
    } = options;

    // 两点之间的圆有多个，通过两点及半径便可以定出两个圆，根据需要选取其中一个圆
    const l = getDistance(startX - endX, startY - endY);

    const m = (startX + endX) / 2; // 横轴中点
    const n = (startY + endY) / 2; // 纵轴中点
    const centerX = (startY - endY) * FACTOR + m;
    const centerY = (endX - startX) * FACTOR + n;
    const radius = getDistance(l / 2, l * FACTOR);

    const startAngle = Math.atan2(startY - centerY, startX - centerX);
    const endAngle = Math.atan2(endY - centerY, endX - centerX);

    Object.assign(this, {
      startX,
      startY,
      endX,
      endY,
      centerX,
      centerY,
      startAngle,
      endAngle,
      radius,
      color,
      lineWidth: width || 1
    });
  }

  draw() {}
}

export default Arc;
