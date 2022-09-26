# leaflet.migration

leaflet plugin that provides migration lines layer.

<!-- ![alt text](public/example.jpg) -->

## Installation

```
npm install -S leaflet.migration
```

## Requirements

- leaflet ^1.5.1
- node 10.8.0

## Demo

```javascript
import 'leflet.migration';
const data = [
  {
    labels: ['from', 'to'],
    from: [lat, lng],
    to: [lat, lng],
    color: '',
    value: '',
  },
];
const popover = document.querySelector('.popover');
const options = {
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
      type: 'arrow',
      imgUrl: '',
      size: 20
    },
  },
  // marker: 'https://github.githubassets.com/favicons/favicon.png',
  replacePopover(x, y, data, index) {
    console.log(x, y, data, index, 'show popover');
    popover.innerHTML =
      'value:' + data.value + '\nfrom:' + data.labels[1] + '\nto:' + data.labels[0];
    return popover;
  },
  onShowPopover(x, y, data, index) {
    console.log(x, y, data, index, 'show popover');
  },
  onHidePopover(index) {
    console.log('hide popover', index);
  },
};
const migrationLayer = L.migrationLayer(data, options);
migrationLayer.setStyle({ pulse: { radius: 20 } });
migrationLayer.setData([]);
map.remove(migrationLayer);
```

## API

Data

| type                | description         |
| ------------------- | ------------------- |
| `[<MigrationData>]` | migration data list |

MigrationData

| attribute | type                          | description                     |
| --------- | ----------------------------- | ------------------------------- |
| labels    | `[<string>from, <string> to]` | label                           |
| from      | `[<number>lat, <number>lng]`  | from label latlng               |
| from      | `[<number>lat, <number>lng]`  | to label latlng                 |
| color     | string                        | the color of each arc and pulse |
| value     | number                        | intense value of migration line |

Options|Style

| option    | type    | default      | description                                  |
| --------- | ------- | ------------ | -------------------------------------------- |
| minRadius | number  | 5            | pulse min radius                             |
| maxRadius | number  | 2\*minRadius | pulse max radius                             |
| arcWidth  | number  | 1            | arc border width                             |
| label     | boolean | true         | set it to false if you don't want show label |
| order     | boolean | false        | Track animation sequence execution           |

Options|EventHandler

| method | returns | description |
| --- | --- | --- |
| replacePopover(`<pixel>x`, `<pixel>y`, `<MigrationData>data`, `<integer>index`) | Element | replace default popover by return element |
| onShowPopover(`<MigrationData>data`, `<integer>index`) | none | called on mouse hover pulse |
| onHidePopover(`<integer>index`) | none | called on mouse leave pulse |

Methods

| method                       | returns | descrition                     |
| ---------------------------- | ------- | ------------------------------ |
| setData(`[<MigrationData>]`) | this    | update migration data          |
| setStyle(options)            | this    | update style                   |
| show()                       | this    | show layer                     |
| hide()                       | this    | hide layer                     |
| play()                       | this    | run animate of arc and pulse   |
| pause()                      | this    | pause animate of arc and pulse |

Methods inherited from [L.Layer](https://leafletjs.com/reference-1.5.0.html#layer)

| method                | returns | descrition                                         |
| --------------------- | ------- | -------------------------------------------------- |
| onAdd(`<Map> map`)    | this    | called on L.migrationLayer(data, style).addTo(map) |
| onRemove(`<Map> map`) | this    | called on map.remove(migrationLayer)               |
