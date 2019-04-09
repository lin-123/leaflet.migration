import Migration from './Migration';

L.MigrationLayer = L.Class.extend({
  options: {
    map: {},
    data: {},
    pulseRadius: 25,
    pulseBorderWidth: 3,
    arcWidth: 1,
    arcLabel: true,
    arcLabelFont: '15px sans-serif',
    Marker: {},
    Spark: {}
  },
  initialize({
    map = {},
    data = {},
    style: { pulse, arc }
  }) {
    Object.assign(this, {
      _map: map,
      _data: data,
      _style: {
        pulse: { ...pulse },
        arc: { ...arc }
      }
    });

    this._show = true;
    this._init();
  },
  _init() {
    const container = L.DomUtil.create('div', 'leaflet-ODLayer-container');
    container.style.position = 'absolute';
    const { x, y } = this._map.getSize();
    container.style.width = `${x}px`;
    container.style.height = `${y}px`;
    this.container = container;
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    container.appendChild(this.canvas);

    this.popover = this._getPopver();
    container.appendChild(this.popover);

    this._map.getPanes().overlayPane.appendChild(container);
    if (!this.migration) {
      const data = this._convertData();
      this.migration = new Migration({
        data,
        context: this.context,
        container,
        popover: this.popover,
        style: this._style
      });
    }
  },
  _getPopver() {
    const popover = document.createElement('div');
    Object.assign(popover.style, {
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
    return popover;
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
  },
  _bindMapEvents() {
    this._map.on('moveend', () => {
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
      this._transform();
      const data = this._convertData();
      this.migration.updateData(data);
      this.migration.start(this.canvas);
    }
  },
  _transform() {
    const bounds = this._map.getBounds();
    const topLeft = this._map.latLngToLayerPoint(bounds.getNorthWest());
    L.DomUtil.setPosition(this.container, topLeft);
  },
  addTo() {
    this._bindMapEvents();
    const bounds = this._map.getBounds();
    if (bounds && this.migration.playAnimation) {
      this._resize();
      this._transform();

      const data = this._convertData();
      this.migration.updateData(data);
      this.migration.start(this.canvas);
    }
  },
  setData(data) {
    this._data = data;
    this._draw();
  },
  // set style
  // setStyle(style) {

  // },
  hide() {
    this.container.style.display = 'none';
    this._show = false;
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
  destroy() {
    this.migration.clear();
    // 移除dom
    this.container.parentNode.removeChild(this.container);
    // 移除事件监听
    this._map.clearAllEventListeners();
    this.mapHandles = [];
  }

});
L.migrationLayer = function (options) {
  return new L.MigrationLayer(options)
}