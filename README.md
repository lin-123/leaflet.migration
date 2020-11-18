# leaflet.migration
leaflet plugin that provides migration lines layer.

![alt text](public/example.jpg)

## Installation
```
npm install -S leaflet.migration
```

## Rquirements
- leaflet ^1.5.1
- node 10.8.0

## Usage

```javascript
import 'leflet.migration';
const data = [{
  labels: ['from', 'to'],
  from: [lat, lng],
  to: [lat, lng],
  color: '',
  value: ''
}];
var options = {
  minRadius: 3,
  maxRadius: 3,
  arcWidth: 0.001,
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
migrationLayer.setStyle({ pulse: { radius: 20 }})
migrationLayer.setData([])
map.remove(migrationLayer)
```

## API

Data

type|description
--|--
`[<MigrationData>]`| migration data list

MigrationData

attribute|type|description
--|--|--
labels|`[<string>from, <string> to]`|label
from|`[<number>lat, <number>lng]`|from label latlng
from|`[<number>lat, <number>lng]`|to label latlng
color|string|the color of each arc and pulse
value|number|intense value of migration line

Options|Style

option|type|default|description
--|--|--|--
minRadius|number|5|pulse min radius
maxRadius|number|2*minRadius|pulse max radius
arcWidth|number|1|arc border width
label|boolean|true|set it to false if you don't want show label
order|boolean|false|Track animation sequence execution

Options|EventHandler

method|returns|description
--|--|--
replacePopover(`<pixel>x`, `<pixel>y`, `<MigrationData>data`, `<integer>index`)|Element|replace default popover by return element
onShowPopover(`<MigrationData>data`, `<integer>index`)|none|called on mouse hover pulse
onHidePopover(`<integer>index`)|none|called on mouse leave pulse

Methods

method|returns|descrition
--|--|--
setData(`[<MigrationData>]`)|this|update migration data
setStyle(options)|this|update style
show()|this|show layer
hide()|this|hide layer
play()|this|run animate of arc and pulse
pause()|this|pause animate of arc and pulse

Methods inherited from [L.Layer](https://leafletjs.com/reference-1.5.0.html#layer)

method|returns|descrition
--|--|--
onAdd(`<Map> map`)|this|called on L.migrationLayer(data, style).addTo(map)
onRemove(`<Map> map`)|this|called on map.remove(migrationLayer)

## Development
- npm start
- web server will listen on 3000
- open http://localhost:3000

## TODO

- [] 渲染性能优化， 可以支持上万个点同时运动
  - 提前把各个扫尾的点的下一个位置计算好， 然后调用 canvas redraw


## feature list
### 2.2.0
- [x] options新增了一个order参数，可以控制轨迹动画是否按顺序播放
### 2.1.0
- [x] 更新 option 参数， 原 pulseRadius 改成 minRadius, maxRadius；

### 2.0.5
- [x] fix bug: popover 由于 map 元素相对页面左上角的偏移而出现偏移 label 元素较远


### 2.0.4
- [x] fix spark not work when Math.abs(startAngle - endAngle) > Math.PI

### 2.0.1
- [x] fix spark cannot move

### 2.0.0
- [x] accomplish setData/setStyle
- [x] accomplish addTo and remove function
- [x] update init options
- [x] add demo to gh-pages
- [x] customize popover

### 1.1.0
- [x] update return value of new MigrationLayer()

### 1.0.3
- [x] set pulse size by data value, radius, zoom

### 1.0.0
- [x] add webpack
- [x] add popover
- [x] config data, style
- [x] layer.setData
