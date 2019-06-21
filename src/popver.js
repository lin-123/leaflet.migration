class Popover {
  constructor() {
    const el = document.createElement('div');
    Object.assign(el.style, {
      position: 'absolute',
      zIndex: '11',
      left: 0,
      top: 0,
      border: '1px solid grey',
      display: 'none',
      background: 'rgba(255,255,255,.3)',
      borderRadius: '5px',
      padding: '8px 16px'
    });
    this.el = el;
  }

  show(x, y, value, labels) {
    const { el } = this;
    el.innerText = `${labels[1]}: ${value}`;
    Object.assign(el.style, {
      display: '',
      transform: `translate(${x}px, ${y}px)`,
    });
  }

  hide() {
    this.el.style.display = 'none';
  }
}

export default new Popover();
