import { FACTOR } from './config';

// color:rgb或rgba格式
// opacity: 透明度
export function calculateColor(color, opacity) {
  if (!color) return;

  if (color.indexOf('#') === 0) {
    const color16 = color.slice(1);
    const r = parseInt(color16.slice(0, 2), 16);
    const g = parseInt(color16.slice(2, 4), 16);
    const b = parseInt(color16.slice(4), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  const rgbPrefix = /^rgb\(/.test(color)
    ? color.replace(/rgb/, 'rgba').replace(')', ',')
    : color.split(',').splice(0, 3).join(',');
  return `${rgbPrefix}, ${opacity})`;
}

export function getDistance(width, height) {
  const pow = length => length * length;
  return Math.sqrt(pow(width) + pow(height));
}

export function getLineCenter(start, end) {
  const center = (start + end) / 2;
  return (start - end) * FACTOR + center;
}

export function extend(arr, handler) {
  let min;
  let max;
  arr.forEach((i) => {
    const value = handler(i);
    if (min === undefined) {
      max = value;
      min = value;
    } else {
      if (min > value) min = value;
      if (max < value) max = value;
    }
  });
  return [min, max];
}

export function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}
