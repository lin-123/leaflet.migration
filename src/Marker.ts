import { MARKER_SIZE } from "./config";

class Marker {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.style = options.style;
    this.initStyle();
    this.color = options.color;
    this.size = options.size;
    // this.size = MARKER_SIZE;
    this.angle = options.angle;
    this.borderWidth = options.borderWidth;
    this.borderColor = options.borderColor;
  }

  initStyle() {
    // 图片
    if (/http/.test(this.style)) {
      const img = document.createElement('img');
      img.src = this.style;
      img.width = MARKER_SIZE;
      img.height = MARKER_SIZE;
      this.img = img;
    }
  }

  draw(context) {
    context.translate(this.x, this.y);
    Object.assign(context, {
      lineWidth: this.borderWidth || 0,
      strokeStyle: this.borderColor || '#000',
      fillStyle: this.color || '#000',
    });

    // 目前先只支持圆
    context.beginPath();
    context.rotate(this.angle + Math.PI);

    if (this.style === 'circle') {
      context.arc(0, 0, this.size, 0, Math.PI * 2, false);
    } else if (this.style === 'arrow') {
      context.moveTo(this.size, this.size);
      context.lineTo(0, -this.size);
      context.lineTo(-this.size, this.size);
      context.lineTo(0, this.size / 4);
      context.lineTo(this.size, this.size);

    } else if (/http/.test(this.style)) {
      const { width, height } = this.img;
      context.drawImage(this.img, -width/2, -height, width, height);
    }

    // debugger;

    context.closePath();
    context.stroke();
    context.fill();
  }
}

export default Marker;
