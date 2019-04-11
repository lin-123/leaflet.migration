// 脉冲， label 圆环扩散
const domCache = [];
const MIN_RADIUS = 3;

class Pulse {
  constructor({
    x, y, color, container, popover, value, labels, dataRange, zoom,
    // user config radius
    radius,
  }) {
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
      popover,
      value,
      labels,
      r,
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
    const {
      x, y, r, color, pulse
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
      boxShadow: `0 0 10px ${color}`,
      transform: `translate(${x}px, ${y}px)`,
    });
    this.container.appendChild(pulse);
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

  draw() {}
}

export default Pulse;
