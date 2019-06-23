/* eslint-disable */

var lrmap = L.map('map1').setView([35.4199, 95.2402], 4);
L.tileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
  subdomains: ["1", "2", "3", "4"]
}).addTo(lrmap);
var data = [{
  "color": "#ff0000",
  "from": [116.404844, 39.91405],
  "to": [84.9023, 42.148],
  "labels": ["北京", "新疆"],
  "value": 84.9023
}, {
  "color": "green",
  "from": [116.404844, 39.91405],
  "to": [87.8695, 31.6846],
  "labels": ["北京", "西藏"],
  "value": 87.8695
}, {
  "color": "green",
  "from": [116.404844, 39.91405],
  "to": [112.5977, 41.3408],
  "labels": ["北京", "内蒙古"],
  "value": 112.5977
}, {
  "color": "green",
  "from": [116.404844, 39.91405],
  "to": [95.2402, 35.4199],
  "labels": ["北京", "青海"],
  "value": 95.2402
}, {
  "color": "green",
  "from": [116.404844, 39.91405],
  "to": [101.9199, 30.1904],
  "labels": ["北京", "四川"],
  "value": 1.9199
}, {
  "color": "green",
  "from": [116.404844, 39.91405],
  "to": [126.1445, 48.7156],
  "labels": ["北京", "黑龙江"],
  "value": 126.1445
}];

var popover = document.querySelector('.popover');
var options = {
  pulseRadius: 10,
  arcWidth: 1,
  label: true,
  replacePopover: function (x, y, data, index) {
    console.log(x, y, data, index, 'show popover');
    popover.innerHTML = 'value:' + data.value + '\nfrom:' + data.labels[1] + '\nto:' + data.labels[0]
    return popover;
  },
  onShowPopover: function (x, y, data, index) {
    console.log(x, y, data, index, 'show popover');
  },
  oHidePopover: function (index) {
    console.log('hide popover', index);
  }
};
var migrationLayer = L.migrationLayer(data, options);
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