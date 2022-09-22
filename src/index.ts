import L, { LeafletEvent, Map } from 'leaflet';
import Migration from './Migration';
import { MIN_ZOOM } from './config';
import { Context } from './store'
import { Data, Options } from './typings/base';

class MigrationLayer extends L.Layer {
  protected _show: boolean = false
  protected mapHandles: Array<any> = []
  migration: Migration
  options: Options
  data: Data
  ctx?: Context

  constructor(_data: Data, options: Options) {
    super();
    this.data = _data;
    this.options = options;
  }

  onAdd(map: Map) {
    const { x, y } = map.getSize();
    const container = L.DomUtil.create('div', 'leaflet-ODLayer-container');
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    Object.assign(this, { _show: true });

    const { data, options } = this;
    this.ctx = new Context({ container, canvas, data, options, map });

    Object.assign(container.style, {
      position: 'absolute',
      width: `${x}px`,
      height: `${y}px`,
    });
    map.getPanes().overlayPane.appendChild(container);

    this.ctx.map = map;
    this.migration = new Migration({
      ctx: this.ctx
    });

    this._bindMapEvents();
    this._draw();
    return this;
  }

  onRemove(map: Map) {
    this.mapHandles.forEach(({ type, handle }: any) => map.off(type, handle));
    this.mapHandles = [];
    L.DomUtil.remove(this.ctx.container);
    this.migration.clear();
    return this;
  }

  setData(data: Data) {
    this.ctx.setData(data);
    this.migration.refresh();
    // this._draw();
    return this;
  }
  setStyle(style: Options) {
    this.ctx.setOptions(style);
    this.migration.refresh();
    return this;
  }
  hide() {
    this.ctx.container.style.display = 'none';
    return this;
  }
  show() {
    this.ctx.container.style.display = '';
    this._show = true;
    return this;
  }
  play() {
    this.migration.play();
    return this;
  }
  pause() {
    this.migration.pause();
    return this;
  }

  _bindMapEvents() {
    const { mapHandles } = this;
    const moveendHandle = (e: LeafletEvent) => {
      const zoom = e.target.getZoom();
      if (zoom < MIN_ZOOM) {
        this.hide();
        return;
      }
      if (!this._show) {
        this.show();
      }
      this.migration.play();
      this._draw();
    }
    const { map } = this.ctx;
    map.on('moveend', moveendHandle);
    mapHandles.push({ type: 'moveend', handle: moveendHandle });

    const zoomstartHandle = () => {
      this.ctx.container.style.display = 'none';
    }
    map.on('zoomstart ', zoomstartHandle);
    mapHandles.push({ type: 'zoomstart', handle: zoomstartHandle });

    const zoomendHandle = () => {
      if (this._show) {
        this.ctx.container.style.display = '';
        this._draw();
      }
    }
    map.on('zoomend', zoomendHandle);
    mapHandles.push({ type: 'zoomend', handle: zoomendHandle });
  }
  _draw() {
    const bounds = this.ctx.map.getBounds();
    if (bounds && this.migration.playAnimation) {
      this._resize();
      this.migration.refresh();
    }
  }

  _resize() {
    const { map, canvas, container } = this.ctx;
    const bounds = map.getBounds();
    const topleft = bounds.getNorthWest();
    const { y } = map.latLngToContainerPoint(topleft);
    // 当地图缩放或者平移到整个地图的范围小于外层容器的范围的时候，要对this.ctx.container进行上下平移操作，反之则回归原位
    if (y > 0) {
      container.style.top = `${-y}px`;
    } else {
      container.style.top = '0px';
    }

    const containerStyle = window.getComputedStyle(map.getContainer());
    canvas.setAttribute('width', containerStyle.width);
    canvas.setAttribute('height', containerStyle.height);

    const posi = map.latLngToLayerPoint(topleft);
    L.DomUtil.setPosition(container, posi);
  }
}


L.migrationLayer = function (data: Data, options: Options) {
  return new MigrationLayer(data, options);
};
