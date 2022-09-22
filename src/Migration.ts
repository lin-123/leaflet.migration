/**
 * 核心类
 */
import linearScale from 'uc-fun/lib/linearScale';
import Line from './Line';
import Pulse from './Pulse';
import Spark from './Spark';
import { extend } from './utils';
import Popover from './popover';
import { Context } from './store';
import { LatLngTuple } from 'leaflet';
import { DataItem } from './typings/base';

class Migration {
  ctx: Context
  started: boolean = false
  playAnimation: boolean = true
  store: any = {
    arcs: [],
    pulses: [],
    sparks: [],
  }
  popover: Popover

  // 顺序播放的时候记录下标
  index: number = 0

  requestAnimationId: number = 0

  // options = { map, canvas, data, options, container }
  constructor({ ctx }: { ctx: Context }) {
    this.ctx = ctx;
    // const { replacePopover, onShowPopover, onHidePopover, ...options } = ctx;
    // Object.assign(this, {
    //   ...otherOptions,
    //   direction,
    //   container,
    //   order: order || false,
    //   style: mergeStyle(style),
    // });
    this.popover = new Popover(ctx);
  }

  /*
   * 更新数据
   */
  refresh() {
    const {
      data, options: {
        marker: {
          radius: [minRadius, maxRadius],
          textVisible: label
        },
        line: {
          width: arcWidth,
          icon
        }
      }
    } = this.ctx;

    if (!data || data.length === 0) {
      return;
    }
    this.clear();

    const dataRange = extend(data, (i: any) => i.value);
    const {
      popover,
    } = this;
    const radiusScale = linearScale(dataRange, [minRadius, maxRadius || 2 * minRadius]);

    // 缓存位置信息， 相同位置的就只初始化一份就行
    const pulsePosi: Set<string> = new Set();
    data.forEach((item: DataItem, index) => {
      // console.log('item',item);
      const { from, to, labels, color } = item;
      const arc = new Line({
        startX: from[0],
        startY: from[1],
        endX: to[0],
        endY: to[1],
        labels,
        label,
        width: arcWidth,
        color,
      });

      // 计算每一个圆环的大小
      const radius = radiusScale(item.value);
      const genPulse = (latlng: LatLngTuple) => {
        const posi = latlng.join('_');
        if (pulsePosi.has(posi)) return;
        pulsePosi.add(posi);
        const pulse = new Pulse({
          x: latlng[0],
          y: latlng[1],
          // dataRange,
          radius,
          // maxRadius,
          index,
          data: item,
          popover,
          ctx: this.ctx
        });
        this.store.pulses.push(pulse);
      }
      genPulse(from);
      genPulse(to);

      // 扫尾
      const spark = new Spark({
        startX: from[0],
        startY: from[1],
        endX: to[0],
        endY: to[1],

        // style: this.ctx.options.line,
        width: minRadius,
        color,
        marker: icon
      });

      this.store.arcs.push(arc);
      this.store.sparks.push(spark);

      this.index = 0;
    });

    this.start();
  }

  clear() {
    this.store.pulses.forEach((pulse: Pulse) => pulse.clear());
    this.store = {
      arcs: [],
      pulses: [],
      sparks: [],
    };
    // 更新状态
    this.playAnimation = true;
    this.started = false;
    // 清除绘画实例，如果没有这个方法，多次调用start，相当于存在多个动画队列同时进行
    window.cancelAnimationFrame(this.requestAnimationId);
  }

  draw(shapes: any) {
    const { canvasCtx } = this.ctx;
    shapes.forEach((shap: any) => shap.draw(canvasCtx));
    for (let i = 0, len = shapes.length; i < len; i++) {
      shapes[i].draw(canvasCtx);
    }
  }

  start() {
    const {
      started,
      store,
    } = this;
    const { canvasCtx: context, canvas: { width, height }, options: { line: { order }} } = this.ctx;
    if (!started) {
      this.draw(store.pulses);
      const drawFrame = () => {
        this.requestAnimationId = window.requestAnimationFrame(drawFrame);
        if (this.playAnimation && context) {
          context.clearRect(0, 0, width, height);
          Object.keys(store).forEach((key) => {
            const shapes = store[key];

            if (order && key === 'sparks') {
              const item = shapes[this.index];
              item.draw(context, order);
              if (((item.endAngle - item.trailAngle) * 180) / Math.PI < 0.5) {
                item.trailAngle = item.startAngle;
                if (this.index < shapes.length - 1) {
                  this.index += 1;
                } else {
                  this.index = 0;
                }
              }
            } else {
              shapes.forEach((shap: any) => shap.draw(context));
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
