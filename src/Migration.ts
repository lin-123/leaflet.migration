/**
 * 核心类
 */
import linearScale from 'uc-fun/lib/linearScale';
import Line from './Line';
import Pulse from './Pulse';
import Spark from './Spark';
import { CanvasCache, extend } from './utils';
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

  // 飞线缓存
  lineCache: CanvasCache
  // 扫尾缓存
  sparkCache: CanvasCache

  // options = { map, canvas, data, options, container }
  constructor({ ctx }: { ctx: Context }) {
    this.ctx = ctx;
    this.popover = new Popover(ctx);
    this.lineCache = new CanvasCache(ctx.canvas);
    this.sparkCache = new CanvasCache(ctx.canvas);
  }

  /*
   * 更新数据
   */
  refresh() {
    const {
      data, options: {
        marker: {
          radius: [minRadius, maxRadius],
        },
        line: {
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
    this.drawLines();
    data.forEach((item: DataItem, index) => {
      const { from, to, color } = item;

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
        from,
        to,
        // style: this.ctx.options.line,
        width: minRadius,
        color,
        marker: icon,
        ctx: this.ctx
      });

      this.store.sparks.push(spark);
    });
    this.index = 0;

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

  drawLines() {
    const {
      data, options: {
        marker: {
          textVisible: label
        },
        line: {
          width: arcWidth,
        }
      },
      // canvasCtx
    } = this.ctx;
    const canvasCtx = this.lineCache.ctx;
    this.lineCache.clear();
    this.sparkCache.clear();
    data.map((item: DataItem) => {
      canvasCtx?.beginPath();
      // console.log('item',item);
      const { from, to, labels, color } = item;
      new Line({
        from,
        to,
        labels,
        label,
        width: arcWidth,
        color,
        canvasCtx
      });
      canvasCtx?.stroke();
    });

    this.lineCache.restore();
  }

  restoreLines() {
    this.lineCache.restore();
  }

  drawSpark() {
    const { options: { line: { order }} } = this.ctx;
    const context = this.sparkCache.ctx;
    if (!context) return;

    context.save();
    context.fillStyle = "rgba(0, 0, 0, 0.9)";
    context.globalCompositeOperation = 'destination-in';
    const { width, height } = this.ctx.canvas;
    context.fillRect(0, 0, width, height);
    context.restore();


    const shapes = this.store.sparks;
    // console.time(key);
    if (order) {
      const item = shapes[this.index];
      item.draw(context, order);
      if (item.isEnd) {
        item.restart();
        if (this.index < shapes.length - 1) {
          this.index += 1;
        } else {
          this.index = 0;
        }
      }
    } else {
      shapes.forEach((shap: any) => shap.draw(context));
    }
    this.sparkCache.restore();
  }

  drawSparkMarkers() {
    this.store.sparks.forEach((item: Spark) => {
      item.drawMarker(this.ctx.canvasCtx);
    });
  }

  start() {
    const {
      started,
      store,
    } = this;
    const { canvasCtx: context, options: { line: { order }}, canvas: { width, height } } = this.ctx;
    if (!started) {
      this.draw(store.pulses);

      const drawFrame = () => {
        // console.time('draw');
        this.requestAnimationId = window.requestAnimationFrame(drawFrame);
        if (this.playAnimation && context) {
          context.clearRect(0, 0, width, height);
          // console.time('line');
          this.restoreLines();
          // console.timeEnd('line');
          // console.time('spark');
          this.drawSpark();
          // console.timeEnd('spark');
          // console.time('sparkMarker');
          this.drawSparkMarkers();
          // console.timeEnd('sparkMarker');
          // console.timeEnd('draw');
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
