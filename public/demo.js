/* eslint-disable */

var lrmap = L.map('map1').setView([35.4199, 95.2402], 4);
L.tileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
  subdomains: ["1", "2", "3", "4"]
}).addTo(lrmap);
var data = [
  {
  "color": "rgb(101, 169, 249)",
  "from": [116.404844, 39.91405],
  "to": [84.9023, 42.148],
  "labels": ["北京", "新疆"],
  "value": 8
  },
  {
    "color": "rgb(101, 169, 249)",
    "from": [84.9023, 42.148],
    "to": [87.8695, 31.6846],
    "labels": ["新疆", "西藏"],
    "value": 8
    }
// }, {
//   "color": "rgb(101, 169, 249)",
//   "from": [116.404844, 39.91405],
//   "to": [87.8695, 31.6846],
//   "labels": ["北京", "西藏"],
//   "value": 30
// }, {
//   "color": "rgb(101, 169, 249)",
//   "from": [116.404844, 39.91405],
//   "to": [112.5977, 41.3408],
//   "labels": ["北京", "内蒙古"],
//   "value": 112.5977
// }, {
//   "color": "#1EBCA1",
//   "from": [116.404844, 39.91405],
//   "to": [95.2402, 35.4199],
//   "labels": ["北京", "青海"],
//   "value": 95.2402
// }, {
//   "color": "#1EBCA1",
//   "from": [116.404844, 39.91405],
//   "to": [101.9199, 30.1904],
//   "labels": ["北京", "四川"],
//   "value": 1.9199
// }, {
//   "color": "#1EBCA1",
//   "from": [116.404844, 39.91405],
//   "to": [126.1445, 48.7156],
//   "labels": ["北京", "黑龙江"],
//   "value": 126.1445
// }
];

var inData = [{
  color: 'rgba(251,176,49,0.8)',
  from: [113.2672, 23.1122],
  to: [116.404844, 39.91405],
  labels: ['广东', '北京'],
  value: 3000,
},
{
  color: 'rgba(251,176,49,0.8)',
  from: [119.312795, 26.084276],
  to: [116.404844, 39.91405],
  labels: ['福建', '北京'],
  value: 180,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [120.20553, 30.257824],
  to: [116.404844, 39.91405],
  labels: ['浙江', '北京'],
  value: 240,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [121.475941, 31.235682],
  to: [116.404844, 39.91405],
  labels: ['上海', '北京'],
  value: 2000,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [117.114254, 36.655635],
  to: [116.404844, 39.91405],
  labels: ['山东', '北京'],
  value: 1350,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [113.632324, 34.747276],
  to: [116.404844, 39.91405],
  labels: ['河南', '北京'],
  value: 220,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [106.550388, 29.565729],
  to: [116.404844, 39.91405],
  labels: ['重庆', '北京'],
  value: 250,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [103.857196, 36.072701],
  to: [116.404844, 39.91405],
  labels: ['甘肃', '北京'],
  value: 170,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [102.741716, 25.070154],
  to: [116.404844, 39.91405],
  labels: ['云南', '北京'],
  value: 120,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [106.246635, 38.48795],
  to: [116.404844, 39.91405],
  labels: ['宁夏', '北京'],
  value: 100,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [113.072967, 28.144518],
  to: [116.404844, 39.91405],
  labels: ['湖南', '北京'],
  value: 230,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [114.292676, 30.600104],
  to: [116.404844, 39.91405],
  labels: ['湖北', '北京'],
  value: 240,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [106.662156, 26.644077],
  to: [116.404844, 39.91405],
  labels: ['贵州', '北京'],
  value: 200,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [115.865978, 28.698674],
  to: [116.404844, 39.91405],
  labels: ['江西', '北京'],
  value: 220,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [117.239702, 31.819508],
  to: [116.404844, 39.91405],
  labels: ['安徽', '北京'],
  value: 240,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [118.801748, 32.060167],
  to: [116.404844, 39.91405],
  labels: ['江苏', '北京'],
  value: 310,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [114.520496, 38.044337],
  to: [116.404844, 39.91405],
  labels: ['河北', '北京'],
  value: 260,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [112.57455, 37.877325],
  to: [116.404844, 39.91405],
  labels: ['山西', '北京'],
  value: 210,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [108.944866, 34.340931],
  to: [116.404844, 39.91405],
  labels: ['陕西', '北京'],
  value: 240,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [123.436169, 41.820611],
  to: [116.404844, 39.91405],
  labels: ['辽宁', '北京'],
  value: 200,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [126.556784, 43.85168],
  to: [116.404844, 39.91405],
  labels: ['吉林', '北京'],
  value: 200,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [87.8695, 31.6846],
  to: [116.404844, 39.91405],
  labels: ['西藏', '北京'],
  value: 75,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [112.5977, 41.3408],
  to: [116.404844, 39.91405],
  labels: ['内蒙古', '北京'],
  value: 100,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [95.2402, 35.4199],
  to: [116.404844, 39.91405],
  labels: ['青海', '北京'],
  value: 95,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [101.9199, 30.1904],
  to: [116.404844, 39.91405],
  labels: ['四川', '北京'],
  value: 280,
}, {
  color: 'rgba(251,176,49,0.8)',
  from: [126.1445, 48.7156],
  to: [116.404844, 39.91405],
  labels: ['黑龙江', '北京'],
  value: 160,
}]

var popover = document.querySelector('.popover');
var options = {
  minRadius: 5,
  maxRadius: 10,
  arcWidth: 0.1,
  label: true,
  order: true,
  replacePopover: function (x, y, data, index) {
    console.log(x, y, data, index, 'show popover');
    popover.innerHTML = 'value:' + data.value + '\nfrom:' + data.labels[1] + '\nto:' + data.labels[0]
    return popover;
  },
  onShowPopover: function (x, y, data, index) {
    console.log(x, y, data, index, 'show popover');
  },
  onHidePopover: function (index) {
    console.log('hide popover', index);
  }
};
var migrationLayer = L.migrationLayer(data.map(i => Object.assign(i, {  })), options);
var layer = migrationLayer.addTo(lrmap);
window.rendomData = function () {
  data = data.map(item => {
    return {
      ...item,
      value: parseInt(Math.random() * 100)
    }
  });
  migrationLayer.setData(data)
}
window.rendomStyle = function () {
  options.pulseRadius = Math.random() * 20
  options.arcWidth = Math.random() * 5
  migrationLayer.setStyle(options)
}
window.add = function () {
  migrationLayer.addTo(lrmap)
}
window.remove = function () {
  lrmap.removeLayer(layer)
}
window.show = function () {
  migrationLayer.show()
}
window.hide = function () {
  migrationLayer.hide()
}
window.changeDirection = function () {
  lrmap.removeLayer(layer)
  options = Object.assign(options, { direction: 'in'});
  migrationLayer = L.migrationLayer(inData, options)
  layer = migrationLayer.addTo(lrmap)
}