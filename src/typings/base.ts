import { LatLngTuple } from "leaflet"

export interface LineIcon {
  type: IconType,
  imgUrl: string,
  size: number
}

export interface LineOption {
  // 飞线宽度
  width: number,
  // 是否按顺序走飞线
  order: boolean,
  icon: LineIcon,
}
export interface MarkerOption {
  // 最小半径、最大半径
  radius: number[],
  // 是否显示波纹动销
  pulse: boolean,
  textVisible: boolean
}
// migration 入参
export interface Options {
  // 出发、目的地样式
  marker: MarkerOption,
  // 飞线
  line: LineOption,
  // 最小 zoom 范围， 当 zoom 小于当前值就显示飞线
  minZoom: number,
  // methods
  // number, number, Data, number
  replacePopover: () => HTMLElement
  onShowPopover: () => void
  onHidePopover: () => void
}

export enum Direction {
  in = 'in',
  out = 'out'
}

export enum IconType {
  circle = 'circle',
  arrow = 'arrow',
  img = 'img'
}

export interface DataItem {
  // rgb, #xxxxxx
  color: string,
  from: [number, number]
  to: [number, number]
  // from: LatLngTuple,
  // to: LatLngTuple,
  labels: [string, string],
  value: number,
}

export type Data = DataItem[]
