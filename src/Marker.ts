import { IconType, LineIcon } from "./typings/base";

export interface MarkerProps {
  style: LineIcon
  color: string
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
    if (style.type === IconType.img) {
      const img = document.createElement('img');
      img.src = style;
      img.width = style.size;
      img.height = style.size;
      this.img = img;
    }
  }

  draw(context: CanvasRenderingContext2D, position: Position) {
    const { borderWidth, borderColor, color, style } = this.options;
    const size = style.size / 2;
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

    if (style.type === IconType.circle) {
      context.arc(0, 0, size, 0, Math.PI * 2, false);
    } else if (style.type === IconType.arrow) {
      context.moveTo(size, size);
      context.lineTo(0, -size);
      context.lineTo(-size, size);
      context.lineTo(0, size / 4);
      context.lineTo(size, size);

    } else if (style.type === IconType.img && this.img) {
      const { width, height } = this.img;
      context.drawImage(this.img, -width/2, -height, width, height);
    }

    context.closePath();
    context.stroke();
    context.fill();
  }
}

export default Marker;
