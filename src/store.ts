/**
 * 全局上下文
 */
import merge from 'lodash/merge';
import L, { LatLngTuple, Map } from "leaflet";
import { DEFAULT_OPTION } from "./config";
import { Data, Options } from "./typings/base";

// export interface ContextProps
export class Context {
  options: Options = DEFAULT_OPTION
  data: Data = []
  map: Map
  container?: HTMLDivElement
  canvas?: HTMLCanvasElement
  canvasCtx?: CanvasRenderingContext2D | null

  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.canvasCtx = canvas.getContext('2d');
  }

  init({ container, canvas, map, options, data }: any) {
    Object.assign(this, {
      container, map, data,
    });
    this.setCanvas(canvas);
    this.setOptions(options);
  }

  setOptions(options: Options) {
    this.options = merge(this.options, options);
  }

  setData(data: Data) {
    // this.data = data;
    this.data = this._convertData(data);
  }

  _convertData(data: Data): Data {
    const { map } = this;
    const bounds = map.getBounds();
    if (data && Array.isArray(data) && data.length > 0 && bounds) {
      const getLatLng = ([lng, lat]: LatLngTuple) => {
        const { x, y } = map.latLngToContainerPoint(new L.LatLng(lat, lng));
        return [x, y];
      };

      // opt = { labels, value, color }
      return data.map(({ from, to, ...opt }: any) => ({
        from: getLatLng(from),
        to: getLatLng(to),
        ...opt,
      }));
    }
    return [];
  }
}

class Store {
  init({ container }) {
    // map container
    this.container = container;
    // this.mapPosi = container.container.getBoundingClientRect();
    this.setMapPosi();
    window.addEventListener('scroll', () => {
      this.setMapPosi();
    });
  }

  setMapPosi() {
    this.mapPosi = this.container.getBoundingClientRect();
  }
}

export default new Store();
