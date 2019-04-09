import Arc from './Arc';

class Line extends Arc {
  constructor(options) {
    super(options);
    const {
      labels, font, label
    } = options;
    Object.assign(this, {
      font,
      label,
      labels,
    });
  }

  draw(context) {
    context.save();
    Object.assign(context, {
      lineWidth: this.lineWidth,
      strokeStyle: this.color,
      fillStyle: this.strokeStyle
    });

    context.beginPath();
    context.arc(
      this.centerX,
      this.centerY,
      this.radius,
      this.startAngle,
      this.endAngle,
      false
    );
    context.stroke();
    context.restore();
    context.save();

    if (this.label) {
      const [startLabel, endLabel] = this.labels;
      Object.assign(context, { font: this.font });
      if (startLabel) {
        const x = this.startX - 15;
        const y = this.startY + 5;
        context.fillText(startLabel, x, y);
      }
      if (endLabel) {
        const x = this.endX - 15;
        const y = this.endY - 5;
        context.fillText(endLabel, x, y);
      }
    }
    context.restore();
  }
}

export default Line;
