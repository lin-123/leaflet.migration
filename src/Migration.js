import Line from './Line';
import Pulse from './Pulse';
import Spark from './Spark';
import { extend } from './utils';
import { STYLE } from './config';
import Popover from './popver';

const mergeStyle = (style) => {
  if (!style) return STYLE;

  return { ...STYLE, ...style };
};

class Migration {
  // options = { map, canvas, data, options, container }
  constructor({ options, container, ...otherOptions }) {
    const {
      replacePopover, onShowPopover, onHidePopover, direction, ...style
    } = options;
    Object.assign(this, {
      ...otherOptions,
      direction,
      container,
      style: mergeStyle(style),
      playAnimation: true,
      started: false,
      store: {
        arcs: [],
        pulses: [],
        sparks: []
      }
    });
    this.popover = new Popover({
      replacePopover, onShowPopover, onHidePopover, container
    });
    this.context = this.canvas.getContext('2d');
  }

  setStyle(style) {
    this.style = mergeStyle(style);
    this.refresh();
  }

  setData(data) {
    this.data = data;
    this.refresh();
  }

  /*
   * 更新数据
   */
  refresh() {
    const { data, direction } = this;
    if (!data || data.length === 0) {
      return;
    }
    this.clear();

    const dataRange = extend(data, i => i.value);
    const {
      popover,
      container, style: {
        arcWidth, pulseRadius, label
      }
    } = this;
    data.forEach((item, index) => {
      const {
        from, to, labels, color
      } = item;
      const arc = new Line({
        startX: from[0],
        startY: from[1],
        endX: to[0],
        endY: to[1],
        labels, label, width: arcWidth, color
      });
      // 计算每一个圆环的大小
      let pulseOption = {
        x: to[0],
        y: to[1],
        dataRange,
        radius: pulseRadius,
        zoom: this.map.getZoom(),
        container,
        index,
        data: item,
        popover
      };
      if (direction === 'in') {
        pulseOption = Object.assign(pulseOption, { x: from[0], y: from[1] });
      }
      const pulse = new Pulse(pulseOption);
      const spark = new Spark({
        startX: from[0],
        startY: from[1],
        endX: to[0],
        endY: to[1],
        width: 15,
        // width: value,
        color,
        direction
      });

      this.store.arcs.push(arc);
      this.store.pulses.push(pulse);
      this.store.sparks.push(spark);
    });

    this.start();
  }

  clear() {
    this.store.pulses.forEach(pulse => pulse.clear());
    this.store = {
      arcs: [],
      pulses: [],
      sparks: []
    };
    // 更新状态
    this.playAnimation = true;
    this.started = false;
    // 清除绘画实例，如果没有这个方法，多次调用start，相当于存在多个动画队列同时进行
    window.cancelAnimationFrame(this.requestAnimationId);
  }

  start() {
    const {
      started, store, context, canvas: { width, height }
    } = this;
    if (!started) {
      const drawFrame = () => {
        this.requestAnimationId = window.requestAnimationFrame(drawFrame);
        if (this.playAnimation) {
          // canvas 重绘
          context.clearRect(0, 0, width, height);
          Object.keys(store).forEach((key) => {
            const shapes = store[key];
            shapes.forEach(shap => shap.draw(context));
            for (let i = 0, len = shapes.length; i < len; i++) {
              shapes[i].draw(context);
            }
          });
        }
      };
      drawFrame();
      this.started = true;
    }
  }

  play() {
    this.playAnimation = true;
  }

  pause() {
    this.playAnimation = false;
  }
}

export default Migration;
