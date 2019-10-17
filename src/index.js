import Migration from './Migration';
import { MIN_ZOOM } from './config';

L.MigrationLayer = L.Layer.extend({
  initialize(_data = [], options) {
    Object.assign(this, {
      _data,
      options
    });

    this._show = true;
    this.mapHandles = [];
  },
  onAdd(map) {
    this._map = map;
    this._init();
    this._bindMapEvents();
    this._draw();
    return this;
  },
  onRemove(map) {
    this.mapHandles.forEach(({ type, handle }) => map.off(type, handle));
    this.mapHandles = [];
    L.DomUtil.remove(this.container);
    this.migration.clear();
    return this;
  },
  setData(data) {
    this._data = data;
    this._draw();
    return this;
  },
  setStyle(style) {
    this.migration.setStyle(style);
    return this;
  },
  hide() {
    this.container.style.display = 'none';
    return this;
  },
  show() {
    this.container.style.display = '';
    this._show = true;
    return this;
  },
  play() {
    this.migration.play();
    return this;
  },
  pause() {
    this.migration.pause();
    return this;
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
      zIndex: 99999999
    });
    const canvas = document.createElement('canvas');
    this.canvas = canvas;
    container.appendChild(canvas);
    this._map.getPanes().overlayPane.appendChild(container);
    this.migration = new Migration({
      canvas,
      container,
      map: this._map,
      data: this._convertData(),
      options: this.options
    });
  },
  _bindMapEvents() {
    const self = this;
    function moveendHandle(e) {
      const zoom = e.target.getZoom();
      if (zoom < MIN_ZOOM) {
        self.hide();
        return;
      }
      if (!self._show) {
        self.show();
      }
      self.migration.play();
      self._draw();
    }
    self._map.on('moveend', moveendHandle);
    self.mapHandles.push({ type: 'moveend', handle: moveendHandle });

    function zoomstartHandle() {
      self.container.style.display = 'none';
    }
    self._map.on('zoomstart ', zoomstartHandle);
    self.mapHandles.push({ type: 'zoomstart', handle: zoomstartHandle });

    function zoomendHandle() {
      if (self._show) {
        self.container.style.display = '';
        self._draw();
      }
    }
    self._map.on('zoomend', zoomendHandle);
    self.mapHandles.push({ type: 'zoomend', handle: zoomendHandle });
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
    if (_data && Array.isArray(_data) && _data.length > 0 && bounds) {
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
