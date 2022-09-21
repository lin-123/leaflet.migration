// 脉冲， label 圆环扩散
import Popover from './popover';
import { Context } from './store';
import { DataItem } from './typings/base';

const domCache: HTMLDivElement[] = [];

export interface PulseProps {
  x: number
  y: number
  data: DataItem
  index: number
  popover: Popover
  radius: number
  ctx: Context
}

class Pulse {
  options: PulseProps
  scale: number = 1
  pulse: HTMLDivElement
  ring: HTMLDivElement

  static domCache: HTMLDivElement[] = []

  constructor(props: PulseProps) {
    // const { color, value, labels } = data;
    // const r = radius;
    // 根据用户设置的 radius, data[x].value, zoom 来决定半径
    this.options = props;
    this.initDom();
  }

  showPopover = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { data, index, popover, ctx } = this.options;
    const { top, left } = ctx.mapPosi;
      popover.show(clientX - left, clientY - top, data, index);
  }

  hidePopover= () => {
    const { data, index, popover } = this.options;
    popover.hide(data, index);
  }

  clear() {
    const { pulse } = this;
    domCache.push(pulse);
    pulse.removeEventListener('mouseover', this.showPopover);
    pulse.removeEventListener('mouseout', this.hidePopover);
    this.options.ctx.container.removeChild(pulse);
  }

  initDom() {
    if (domCache.length > 0) {
      this.pulse = domCache.pop();
      this.ring = this.pulse.children[0];
    } else {
      this.pulse = document.createElement('div');
      this.ring = document.createElement('div');
      this.pulse.appendChild(this.ring);
    }
    const { x, y, radius, data: { color } } = this.options;
    const { pulse, ring } = this;
    Object.assign(pulse.style, {
      position: 'absolute',
      zIndex: '1',
      borderRadius: '50%',
      width: `${2 * radius}px`,
      height: `${2 * radius}px`,
      left: `-${radius}px`,
      top: `-${radius}px`,
      background: color,
      // boxShadow: `0 0 10px ${color}`,
      transform: `translate(${x}px, ${y}px)`,
    });

    Object.assign(ring.style, {
      position: 'absolute',
      borderRadius: '50%',
      width: `${2 * radius}px`,
      height: `${2 * radius}px`,
      left: `${-1}px`,
      top: `${-1}px`,
      border: `1px solid ${color}`,
    });
    this.options.ctx.container.appendChild(pulse);

    pulse.addEventListener('mouseover', this.showPopover);
    pulse.addEventListener('mouseout', this.hidePopover);
  }

  draw() {
    const { scale } = this;
    Object.assign(this.ring.style, {
      transform: `scale(${scale})`,
    });
    this.scale += 0.02;
    if (scale > 2) {
      this.scale = 1;
    }
  }
}

export default Pulse;
