import { getType } from './utils';
import { POPOVER_OFFSET } from './config';

class Popover {
  constructor({
    onShowPopover, onHidePopover, container, replacePopover
  }) {
    // wrapper
    this.el = L.DomUtil.create('div', '', container);
    Object.assign(this.el.style, {
      position: 'absolute',
      left: '0',
      top: '0',
      display: 'none',
      zIndex: '11'
    });
    this.context = L.DomUtil.create('div', '', this.el);
    if (getType(replacePopover) === 'Function') {
      this.replace = replacePopover;
    } else {
      Object.assign(this.context.style, {
        border: '1px solid grey',
        background: 'rgba(255,255,255,.3)',
        borderRadius: '5px',
        padding: '8px 16px'
      });
    }
    Object.assign(this, {
      onShow: onShowPopover,
      onHide: onHidePopover,
    });
  }

  show(x, y, data, idx) {
    const { value, labels } = data;
    const { el, replace, onShow } = this;
    if (replace) {
      const popover = replace(x, y, data, idx);
      // el.appendChild(popover);
      el.replaceChild(popover, el.children[0]);
    } else {
      this.context.innerText = `${labels[0]} -> ${labels[1]}: ${value}`;
    }
    if (getType(onShow) === 'Function') onShow(data, idx);

    Object.assign(el.style, {
      display: '',
      transform: `translate(${x + POPOVER_OFFSET}px, ${y + POPOVER_OFFSET}px)`,
    });
  }

  hide(idx) {
    const { el, onHide } = this;
    if (getType(onHide) === 'Function') onHide(data, idx);
    el.style.display = 'none';
  }
}

export default Popover;
