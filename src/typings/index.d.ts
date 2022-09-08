// migration 入参
export interface Options {
  // 出发、目的地样式
  marker?: {
    // 最小半径、最大半径
    radius?: [number, number],
    // 是否显示波纹动销
    pulse?: boolean,
    textVisible?: boolean
  },
  // 飞线
  line?: {
    // 飞线宽度
    width?: number,
    // 是否按顺序走飞线
    order?: boolean,
    icon?: {
      type: IconType,
      imgUrl?: string,
      size: number
    },
  },
  // 最小 zoom 范围， 当 zoom 小于当前值就显示飞线
  minZoom: number
}

export enum IconType {
  circle = 'circle',
  arrow = 'arrow',
  img = 'img'
}
