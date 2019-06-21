import Migration from './Migration';
import { MIN_ZOOM } from './config';
import popover from './popver';

L.MigrationLayer = L.Layer.extend({
  initialize(data = [], { pulse, arc }) {
    Object.assign(this, {
      _data: data,
      _style: {
        pulse: { ...pulse },
        arc: { ...arc }
      }
    });

    this._show = true;
  },
  onAdd(map) {
    this._map = map;
    this._init();
    this._bindMapEvents();
    this._draw();
  },
  onRemove(map) {
    L.DomUtil.remove(this.container);
    map.clearAllEventListeners();
    this.migration.clear();
    this.mapHandles = [];
  },
  setData(data) {
    this._data = data;
    this._draw();
  },
  setStyle(style) {
    this.migration.setStyle(style);
  },
  hide() {
    this.container.style.display = 'none';
  },
  show() {
    this.container.style.display = '';
    this._show = true;
  },
  play() {
    this.migration.play();
  },
  pause() {
    this.migration.pause();
  },

  _init() {
    // div > canvas, div.popover
    const container = L.DomUtil.create('div', 'leaflet-ODLayer-container');
    this.container = container;
    const { x, y } = this._map.getSize();
    Object.assign(container.style, {
      position: 'absolute',
      width: `${x}px`,
      height: `${y}px`,
    });
    const canvas = document.createElement('canvas');
    this.canvas = canvas;
    container.appendChild(canvas);
    container.appendChild(popover.el);

    this._map.getPanes().overlayPane.appendChild(container);
    this.migration = new Migration({
      canvas,
      container,
      popover,
      map: this._map,
      data: this._convertData(),
      style: this._style
    });
  },
  _bindMapEvents() {
    this._map.on('moveend', (e) => {
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
    });
    this._map.on('zoomstart ', () => {
      this.container.style.display = 'none';
    });
    this._map.on('zoomend', () => {
      if (this._show) {
        this.container.style.display = '';
        this._draw();
      }
    });
  },
  _draw() {
    const bounds = this._map.getBounds();
    if (bounds && this.migration.playAnimation) {
      this._resize();
      this.migration.setData(this._convertData());
    }
  },
  _convertData() {
    const { _map, _data } = this;
    const bounds = _map.getBounds();
    if (_data && bounds) {
      const getLatLng = ([lng, lat]) => {
        const { x, y } = _map.latLngToContainerPoint(new L.LatLng(lat, lng));
        return [x, y];
      };

      // opt = { labels, value, color }
      return _data.map(({ from, to, ...opt }) => ({
        from: getLatLng(from),
        to: getLatLng(to),
        ...opt
      }));
    }
    return [];
  },
  _resize() {
    const bounds = this._map.getBounds();
    const topleft = bounds.getNorthWest();
    const { y } = this._map.latLngToContainerPoint(topleft);
    // 当地图缩放或者平移到整个地图的范围小于外层容器的范围的时候，要对this.container进行上下平移操作，反之则回归原位
    if (y > 0) {
      this.container.style.top = `${-y}px`;
    } else {
      this.container.style.top = '0px';
    }

    const containerStyle = window.getComputedStyle(this._map.getContainer());
    this.canvas.setAttribute('width', parseInt(containerStyle.width, 10));
    this.canvas.setAttribute('height', parseInt(containerStyle.height, 10));

    const posi = this._map.latLngToLayerPoint(topleft);
    L.DomUtil.setPosition(this.container, posi);
  },
});
L.migrationLayer = function (data, options) {
  return new L.MigrationLayer(data, options);
};
