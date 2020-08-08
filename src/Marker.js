
class Marker {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.style = options.style;
    this.color = options.color;
    this.size = options.size;
    this.borderWidth = options.borderWidth;
    this.borderColor = options.borderColor;
  }

  draw(context) {
    context.translate(this.x, this.y);
    Object.assign(context, {
      lineWidth: this.borderWidth || 0,
      strokeStyle: this.borderColor || '#000',
      fillStyle: this.color || '#000'
    });

    // 目前先只支持圆
    context.beginPath();
    if (this.style === 'circle') {
      context.arc(0, 0, this.size, 0, Math.PI * 2, false);
    } else if (this.style === 'arrow') {
      context.moveTo(-this.size, -this.size);
      context.lineTo(this.size, 0);
      context.lineTo(-this.size, this.size);
      context.lineTo(-this.size / 4, 0);
      context.lineTo(-this.size, -this.size);
    }
    context.closePath();
    context.stroke();
    context.fill();
  }
}

export default Marker;
