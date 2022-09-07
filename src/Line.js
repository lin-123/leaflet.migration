import Arc from './Arc';

class Line extends Arc {
  constructor(options) {
    super(options);
    const { labels, font, label } = options;
    Object.assign(this, {
      font,
      label,
      labels,
    });
  }

  draw(context) {
    Object.assign(context, {
      lineWidth: this.lineWidth,
      strokeStyle: this.color,
      fillStyle: this.strokeStyle,
    });

    context.beginPath();
    context.arc(this.centerX, this.centerY, this.radius, this.startAngle, this.endAngle, false);
    context.stroke();

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
  }
}

export default Line;
