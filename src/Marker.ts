import { MARKER_SIZE } from "./config";

export interface MarkerProps {
  style: string
  color: string
  size: number
  borderWidth: number
  borderColor: string
}

export interface Position {
  x: number
  y: number
  angle: number
}
class Marker {
  private options: MarkerProps
  img?: HTMLImageElement

  constructor(options: MarkerProps) {
    this.options = options;

    const { style } = options;
    if (/http/.test(style)) {
      const img = document.createElement('img');
      img.src = style;
      img.width = MARKER_SIZE;
      img.height = MARKER_SIZE;
      this.img = img;
    }
  }

  draw(context: CanvasRenderingContext2D, position: Position) {
    const { borderWidth, borderColor, color, style, size } = this.options;
    const { x, y, angle } = position;
    context.translate(x, y);
    Object.assign(context, {
      lineWidth: borderWidth || 0,
      strokeStyle: borderColor || '#000',
      fillStyle: color || '#000',
    });

    // 目前先只支持圆
    context.beginPath();
    context.rotate(angle + Math.PI);

    if (style === 'circle') {
      context.arc(0, 0, size, 0, Math.PI * 2, false);
    } else if (style === 'arrow') {
      context.moveTo(size, size);
      context.lineTo(0, -size);
      context.lineTo(-size, size);
      context.lineTo(0, size / 4);
      context.lineTo(size, size);

    } else if (/http/.test(style) && this.img) {
      const { width, height } = this.img;
      context.drawImage(this.img, -width/2, -height, width, height);
    }

    context.closePath();
    context.stroke();
    context.fill();
  }
}

export default Marker;
