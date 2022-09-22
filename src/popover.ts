import { getType } from './utils';
import { POPOVER_OFFSET } from './config';
import L from 'leaflet';
import { Context } from './store';

class Popover {
  replace?: Function
  onShow?: Function
  onHide?: Function
  el: HTMLDivElement
  context: HTMLDivElement;

  constructor(ctx: Context) {
    // wrapper
    this.el = L.DomUtil.create('div', '', ctx.container);
    Object.assign(this.el.style, {
      position: 'absolute',
      left: '0',
      top: '0',
      display: 'none',
      zIndex: '11',
    });
    this.context = L.DomUtil.create('div', '', this.el);
    const { replacePopover, onShowPopover, onHidePopover } = ctx.options;
    if (getType(replacePopover) === 'Function') {
      this.replace = replacePopover;
    } else {
      Object.assign(this.context.style, {
        border: '1px solid grey',
        background: 'rgba(255,255,255,.3)',
        borderRadius: '5px',
        padding: '8px 16px',
      });
    }
    this.onShow = onShowPopover;
    this.onHide = onHidePopover;
  }

  show(x: number, y: number, data, idx) {
    const { value, labels } = data;
    const { el, replace, onShow } = this;
    if (replace) {
      const popover = replace(x, y, data, idx);
      // el.appendChild(popover);
      el.replaceChild(popover, el.children[0]);
    } else {
      this.context.innerText = `${labels[0]} -> ${labels[1]}: ${value}`;
    }
    if (onShow && getType(onShow) === 'Function') onShow(data, idx);

    Object.assign(el.style, {
      display: '',
      transform: `translate(${x + POPOVER_OFFSET}px, ${y + POPOVER_OFFSET}px)`,
    });
  }

  hide(data, idx) {
    const { el, onHide } = this;
    if (onHide && getType(onHide) === 'Function') onHide(data, idx);
    el.style.display = 'none';
  }
}

export default Popover;
