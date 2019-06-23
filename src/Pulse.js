// 脉冲， label 圆环扩散

const domCache = [];
const MIN_RADIUS = 3;

class Pulse {
  constructor({
    x, y, container, dataRange, zoom, data, index, popover,
    // user config radius
    radius,
  }) {
    const { color, value, labels } = data;
    // 根据用户设置的 radius, data[x].value, zoom 来决定半径
    const minRadius = radius / 2;
    const [, max] = dataRange;
    const standardR = (minRadius + value * radius / max) * zoom / 6;
    const r = standardR > MIN_RADIUS ? standardR : MIN_RADIUS;

    Object.assign(this, {
      x,
      y,
      color,
      container,
      value,
      labels,
      r,
      scale: 1
    });
    this.showPopover = (e) => {
      const { clientX, clientY } = e;
      popover.show(clientX, clientY, data, index);
    };
    this.hidPopover = () => popover.hide(index);
    this.initDom();
  }

  clear() {
    domCache.push(this.pulse);
    this.pulse.removeEventListener('mouseover', this.showPopover);
    this.pulse.removeEventListener('mouseout', this.hidPopover);
    this.container.removeChild(this.pulse);
  }

  initDom() {
    if (domCache.length > 0) {
      this.pulse = domCache.pop();
      [this.ring] = this.pulse.children;
    } else {
      this.pulse = document.createElement('div');
      this.ring = document.createElement('div');
      this.pulse.appendChild(this.ring);
    }
    const {
      x, y, r, color, pulse, ring
    } = this;
    Object.assign(pulse.style, {
      position: 'absolute',
      zIndex: '1',
      borderRadius: '50%',
      width: `${2 * r}px`,
      height: `${2 * r}px`,
      left: `-${r}px`,
      top: `-${r}px`,
      background: color,
      // boxShadow: `0 0 10px ${color}`,
      transform: `translate(${x}px, ${y}px)`,
    });

    Object.assign(ring.style, {
      position: 'absolute',
      borderRadius: '50%',
      width: `${2 * r}px`,
      height: `${2 * r}px`,
      left: `${-1}px`,
      top: `${-1}px`,
      border: `1px solid ${color}`
    });
    this.container.appendChild(pulse);

    this.pulse.addEventListener('mouseover', this.showPopover);
    this.pulse.addEventListener('mouseout', this.hidPopover);
  }

  draw() {
    const { scale } = this;
    Object.assign(this.ring.style, {
      transform: `scale(${scale})`
    });
    this.scale += 0.02;
    if (scale > 2) {
      this.scale = 1;
    }
  }
}

export default Pulse;
