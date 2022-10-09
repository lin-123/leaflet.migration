// 飞线， 根据曲线的路径飞行
import Arc, { ArcProps } from './Arc';
import Marker from './Marker';
import { Direction, LineIcon } from './typings/base';

export interface SparkProps extends ArcProps {
  marker: LineIcon
}

class Spark extends Arc {
  factor: number
  deltaAngle: number
  trailAngle: number
  // arcAngle: number
  tailPointsCount: number
  animateBlur?: boolean
  marker: Marker

  constructor(options: SparkProps) {
    super(options);
    this.tailPointsCount = 10; // 拖尾点数
    // 飞线速度
    this.factor = 2 / this.radius;
    this.deltaAngle = 80 / Math.min(this.radius, 400) / this.tailPointsCount;
    this.trailAngle = this.startAngle;
    // this.arcAngle = this.startAngle;
    // 是否有阴影

    // this.animateBlur = true;
    if (Math.abs(this.startAngle - this.endAngle) > Math.PI) {
      this.endAngle += Math.PI * 2;
    }

    this.marker = new Marker({
      style: options.marker,
      color: 'rgb(255, 255, 255)',
      borderWidth: 1,
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
    context.closePath();
    context.stroke();
  }

  draw(context: CanvasRenderingContext2D, order?: Direction): void {
    const { endAngle, trailAngle, factor, color } = this;
    // 匀速
    const angle = trailAngle + factor;
    this.trailAngle = angle;

    // 拖尾效果
    const tailLineWidth = 5;
    this.drawArc(context, color, tailLineWidth, trailAngle, trailAngle);
    if (this.isEnd && !order) {
      this.restart();
    }
  }

  drawMarker(context: CanvasRenderingContext2D) {
    context.save();
    context.translate(this.centerX, this.centerY);
    // 画箭头
    this.marker.draw(context, {
      x: Math.cos(this.trailAngle) * this.radius,
      y: Math.sin(this.trailAngle) * this.radius,
      angle: this.trailAngle,
    });
    context.restore();
  }

  // 检查飞线是否抵达终点
  get isEnd(): boolean {
    return ((this.endAngle - this.trailAngle) * 180) / Math.PI < 0.5;
  }

  // 重新发射射线
  restart() {
    this.trailAngle = this.startAngle;
  }
}

export default Spark;
