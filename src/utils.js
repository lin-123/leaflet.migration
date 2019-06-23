import { FACTOR } from './config';

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
