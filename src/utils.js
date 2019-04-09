import { FACTOR } from './config';

// color:rgb或rgba格式
// opacity: 透明度
export function calculateColor(color, opacity) {
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
