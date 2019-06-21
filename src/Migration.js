import Marker from './Marker';
import Line from './Line';
import Pulse from './Pulse';
import Spark from './Spark';
import { extend } from './utils';

class Migration {
  // options = { map, canvas, data, style, container, popover }
  constructor(options) {
    Object.assign(this, {
      ...options,
      playAnimation: true,
      started: false,
      store: {
        arcs: [],
        markers: [],
        pulses: [],
        sparks: []
      }
    });
    this.context = this.canvas.getContext('2d');
  }

  setStyle(style) {
    this.style = style;
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
    const { data } = this;
    if (!data || data.length === 0) {
      return;
    }
    this.clear();

    const dataRange = extend(data, i => i.value);
    const {
      container, popover, style: {
        arc: { label, font, width },
        pulse: { radius, borderWidth }
      }
    } = this;
    data.forEach(({
      from, to, labels, color, value
    }) => {
      const arc = new Line({
        startX: from[0],
        startY: from[1],
        endX: to[0],
        endY: to[1],
        labels, label, font, width, color
      });
      const marker = new Marker({
        x: to[0],
        y: to[1],
        rotation: arc.endAngle + Math.PI / 2,
        style: 'arrow',
        color,
        size: 4,
        borderWidth: 0,
        borderColor: color
      });
      // 计算每一个圆环的大小
      const pulse = new Pulse({
        x: to[0],
        y: to[1],
        dataRange,
        radius,
        zoom: this.map.getZoom(),
        color, borderWidth, container, popover, value, labels
      });
      const spark = new Spark({
        startX: from[0],
        startY: from[1],
        endX: to[0],
        endY: to[1],
        width: 15,
        // width: value,
        color,
      });

      this.store.arcs.push(arc);
      this.store.markers.push(marker);
      this.store.pulses.push(pulse);
      this.store.sparks.push(spark);
    });

    this.start();
  }

  clear() {
    this.store.pulses.forEach(pulse => pulse.clear());
    this.store = {
      arcs: [],
      markers: [],
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
