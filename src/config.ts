import { IconType } from "./typings/base";

// 因子
export const FACTOR = 1.5;

export const MIN_ZOOM = 3;

export const STYLE = {
  minRadius: 5,
  arcWidth: 1,
  label: true,
  // arrow|circle|imgUrl
  marker: 'circle',
};

export const DEFAULT_STYLE = {
  marker: {
    // 最小半径、最大半径
    radius: [5, 10],
    // 是否显示波纹动销
    pulse: true,
    textVisible: true
  },
  // 飞线
  line: {
    // 飞线宽度
    width: 1,
    // 是否按顺序走飞线
    order: false,
    icon: {
      type: IconType.arrow,
      imgUrl: '',
      size: 20
    },
  },
}

export const POPOVER_OFFSET = 12;

export const MARKER_SIZE = 20;
