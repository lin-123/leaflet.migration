// 脉冲， label 圆环扩散
import { calculateColor } from './utils';

const domCache = [];
class Pulse {
  constructor({
    x, y, radius, color, borderWidth, container, popover, value, labels
  }) {
    Object.assign(this, {
      x,
      y,
      color,
      container,
      popover,
      value,
      labels,
      lineWidth: borderWidth,
      shadowBlur: 50,
      r: 2,
      factor: 2 / radius,
      maxRadius: radius,
    });
    this.initDom();
  }

  clear() {
    domCache.push(this.pulse);
    this.pulse.removeEventListener('mouseover', this.showPopover.bind(this));
    this.pulse.removeEventListener('mouseout', this.hidePopver.bind(this));
    this.container.removeChild(this.pulse);
  }

  initDom() {
    if (domCache.length > 0) {
      this.pulse = domCache.pop();
    } else {
      this.pulse = document.createElement('div');
    }
    Object.assign(this.pulse.style, {
      position: 'absolute',
      zIndex: '1',
      borderRadius: '50%',
    });
    this.container.appendChild(this.pulse);
    this.pulse.addEventListener('mouseover', this.showPopover.bind(this));
    this.pulse.addEventListener('mouseout', this.hidePopver.bind(this));
  }

  hidePopver() {
    Object.assign(this.popover.style, {
      display: 'none'
    });
  }

  showPopover() {
    const {
      x, y, popover, value, labels
    } = this;
    popover.innerText = `${labels[1]}: ${value}`;
    Object.assign(popover.style, {
      display: 'block',
      transform: `translate(${x}px, ${y}px)`,
    });
  }

  draw() {
    const vr = 0.5;
    this.r += vr;
    const {
      x, y, r, lineWidth, maxRadius, color
    } = this;
    const strokeColor = calculateColor(color, 1 - r / maxRadius);
    Object.assign(this.pulse.style, {
      width: `${2 * r}px`,
      height: `${2 * r}px`,
      border: `${lineWidth}px solid ${strokeColor}`,
      left: `-${r + 1}px`,
      top: `-${r + 3}px`,
      transform: `translate(${x}px, ${y}px)`,
    });

    if (Math.abs(maxRadius - r) < 0.8) {
      this.r = 0;
    }
  }
}

export default Pulse;
