/**
 * 全局上下文
 */
import merge from 'lodash/merge';
import L, { LatLngTuple, Map } from "leaflet";
import { DEFAULT_OPTION } from "./config";
import { Data, Options } from "./typings/base";

export interface ContextProps {
  container: HTMLDivElement
  canvas: HTMLCanvasElement
  data: Data
  options: Options,
  map: Map
}

// export interface ContextProps
export class Context {
  options: Options = DEFAULT_OPTION
  data: Data = []
  map: Map
  container: HTMLDivElement
  canvas: HTMLCanvasElement
  canvasCtx: CanvasRenderingContext2D | null
  mapPosi: DOMRect

  constructor({
    container, canvas, data, options, map
  }: ContextProps) {
    this.container = container;
    this.canvas = canvas;
    this.canvasCtx = canvas.getContext('2d');
    this.map = map;
    this.data = this._convertData(data);
    this.setOptions(options);

    this.mapPosi = this.container.getBoundingClientRect();
    window.addEventListener('scroll', () => {
      this.mapPosi = this.container.getBoundingClientRect();
    });
  }

  setOptions(options: Options) {
    this.options = merge(this.options, options);
  }

  setData(data: Data) {
    // this.data = data;
    this.data = this._convertData(data);
  }

  // convert latlng to xy
  _convertData(data: Data): Data {
    const { map } = this;
    if (!map || !Array.isArray(data)) return [];
    const bounds = map.getBounds();
    if (bounds) {
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
