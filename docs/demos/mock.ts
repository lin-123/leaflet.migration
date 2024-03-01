// 批量模拟数据
const randomNum = (start: number, end: number) => Math.floor(start + (end - start) * Math.random());

export const genData = (length: number, interator) => {
  return Array.from({ length }, (i, idx) => {
    return interator({
      color: 'rgb(101, 169, 249)',
      from: [randomNum(84, 116), randomNum(32, 48)],
      to: [randomNum(84, 116), randomNum(32, 48)],
      labels: [`from-${idx}`, `to-${idx}`],
      value: randomNum(1, 10),
    });
  });
};

export const randomDataByLen = (len) => genData(len, (i) => ({
  ...i,
  // to: [116.404844, 32.91405],
  from: [96.404844, 40],
  labels: ['somewhere', i.labels[1]]
}));

export const data = randomDataByLen(10);

export const inData = genData(10, (i) => ({
  ...i,
  color: 'rgba(251,176,49,0.8)',
  to: [116.404844, 39.91405],
  labels: [i.labels[0], '北京']
}));
