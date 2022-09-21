// 飞线， 根据曲线的路径飞行
import Arc from './Arc';
import Marker from './Marker';
import { Direction } from './typings/base';

class Spark extends Arc {
  factor: number
  deltaAngle: number
  trailAngle: number
  arcAngle: number
  tailPointsCount: number
  animateBlur?: boolean
  marker: Marker

  constructor(options: any) {
    super(options);
    this.tailPointsCount = 10; // 拖尾点数
    // 飞线速度
    this.factor = 2 / this.radius;
    this.deltaAngle = 80 / Math.min(this.radius, 400) / this.tailPointsCount;
    this.trailAngle = this.startAngle;
    this.arcAngle = this.startAngle;
    // 是否有阴影

    // this.animateBlur = true;
    if (Math.abs(this.startAngle - this.endAngle) > Math.PI) {
      this.endAngle += Math.PI * 2;
    }

    this.marker = new Marker({
      x: 50,
      y: 80,
      angle: (50 * Math.PI) / 180,
      style: options.marker,
      color: 'rgb(255, 255, 255)',
      size: 10,
      borderWidth: 0,
      borderColor: this.color,
    });
  }

  drawArc(context: CanvasRenderingContext2D, strokeColor: String, lineWidth: number, startAngle: number, endAngle: number) {
    Object.assign(context, {
      lineWidth,
      strokeStyle: strokeColor,
      shadowColor: strokeColor,
      lineCap: 'round',
    });
    context.beginPath();
    context.arc(this.centerX, this.centerY, this.radius, startAngle, endAngle, false);
    context.stroke();
  }

  draw(context: CanvasRenderingContext2D, order?: Direction): void {
    const { endAngle, trailAngle, factor, color, deltaAngle } = this;
    // 匀速
    const angle = trailAngle + factor;
    const strokeColor = color;
    if (this.animateBlur) {
      this.arcAngle = angle;
    }
    this.trailAngle = angle;
    context.beginPath();
    this.drawArc(
      // this.lineWidth from 圆的半径
      context,
      strokeColor,
      2 * this.lineWidth,
      this.startAngle,
      this.arcAngle,
    );

    // 拖尾效果
    const count = this.tailPointsCount;
    for (let i = 0; i < count; i++) {
      const arcColor = color;
      const tailLineWidth = 5;
      if (trailAngle - deltaAngle * i > this.startAngle) {
        this.drawArc(
          context,
          arcColor,
          tailLineWidth - (tailLineWidth / count) * i,
          trailAngle - deltaAngle * i,
          trailAngle,
        );
      }
    }
    context.stroke();

    context.save();
    context.translate(this.centerX, this.centerY);
    this.marker.draw(context, {
      x: Math.cos(this.trailAngle) * this.radius,
      y: Math.sin(this.trailAngle) * this.radius,
      angle: this.trailAngle,
    });
    context.restore();

    if (!order && ((endAngle - this.trailAngle) * 180) / Math.PI < 0.5) {
      this.trailAngle = this.startAngle;
      this.animateBlur = false;
    }
  }
}

export default Spark;
