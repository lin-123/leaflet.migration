import Arc, { ArcProps } from './Arc';

export interface LineProps extends ArcProps {
  font?: string
  label: boolean
  labels: [string, string]
  canvasCtx: CanvasRenderingContext2D | null
}
class Line extends Arc {
  font?: string
  label: boolean
  // labels for [start, end]
  labels: [string, string]
  constructor(options: LineProps) {
    super(options);
    this.font = options.font;
    this.label = options.label;
    this.labels = options.labels;
    this.draw(options.canvasCtx);
  }

  draw(context: CanvasRenderingContext2D | null): void {
    if (!context) return;
    Object.assign(context, {
      lineWidth: this.lineWidth,
      strokeStyle: this.color,
      // fillStyle: this.strokeStyle,
    });

    context.arc(this.centerX, this.centerY, this.radius, this.startAngle, this.endAngle, false);

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
