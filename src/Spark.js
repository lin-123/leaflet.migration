// 飞线， 根据曲线的路径飞行
import Arc from './Arc';
import Marker from './Marker';
import { calculateColor } from './utils';

class Spark extends Arc {
  constructor(options) {
    super(options);

    // if (startAngle * endAngle < 0) {
    //   if (startAngle < 0) {
    //     startAngle += Math.PI * 2;
    //     endAngle += Math.PI * 2;
    //   } else {
    //     endAngle += Math.PI * 2;
    //   }
    // }

    this.tailPointsCount = 50; // 拖尾点数
    this.factor = 2 / this.radius;
    this.deltaAngle = (80 / Math.min(this.radius, 400)) / this.tailPointsCount;
    this.trailAngle = this.startAngle;
    this.arcAngle = this.startAngle;
    // 是否有阴影
    this.animateBlur = true;
    this.marker = new Marker({
      x: 50,
      y: 80,
      rotation: 50 * Math.PI / 180,
      style: 'arrow',
      color: 'rgb(255, 255, 255)',
      size: 3,
      borderWidth: 0,
      borderColor: this.color
    });
  }

  drawArc(context, strokeColor, lineWidth, startAngle, endAngle) {
    context.save();
    Object.assign(context, {
      lineWidth,
      strokeStyle: strokeColor,
      shadowColor: strokeColor,
      lineCap: 'round'
    });
    context.beginPath();
    context.arc(
      this.centerX, this.centerY, this.radius, startAngle, endAngle, false
    );
    context.stroke();
    context.restore();
  }

  draw(context) {
    const {
      endAngle, trailAngle, factor, color, deltaAngle
    } = this;
    // 匀速
    const angle = trailAngle + factor;
    const strokeColor = calculateColor(color, 0.1);
    if (this.animateBlur) {
      this.arcAngle = angle;
    }
    this.trailAngle = angle;
    this.drawArc(
      context, strokeColor, this.lineWidth, this.startAngle, this.arcAngle
    );

    // 拖尾效果
    const count = this.tailPointsCount;
    for (let i = 0; i < count; i++) {
      const arcColor = calculateColor(color, 0.3 - 0.3 / count * i);
      const tailLineWidth = 5;
      if (trailAngle - deltaAngle * i > this.startAngle) {
        this.drawArc(
          context, arcColor,
          tailLineWidth - tailLineWidth / count * i,
          trailAngle - deltaAngle * i,
          trailAngle
        );
      }
    }

    context.save();
    context.translate(this.centerX, this.centerY);
    this.marker.x = Math.cos(this.trailAngle) * this.radius;
    this.marker.y = Math.sin(this.trailAngle) * this.radius;
    this.marker.rotation = this.trailAngle + Math.PI / 2;
    this.marker.draw(context);
    context.restore();

    if ((endAngle - this.trailAngle) * 180 / Math.PI < 0.5) {
      this.trailAngle = this.startAngle;
      this.animateBlur = false;
    }
  }
}

export default Spark;
