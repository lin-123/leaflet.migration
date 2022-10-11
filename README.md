# leaflet.migration

leaflet plugin that provides migration lines layer.

<!-- ![alt text](public/example.jpg) -->
<image src="./assets/leaflet.migration-demo.gif">

## Installation

```
npm install -S leaflet.migration
```

## [Demo](https://lin-123.github.io/leaflet.migration/)

```javascript
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
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
    radius: [5, 10],
    pulse: true,
    textVisible: true
  },
  line: {
    width: 1,
    order: false,
    icon: {
      type: 'arrow',
      imgUrl: '',
      size: 20
    },
  },
  // marker: 'https://github.githubassets.com/favicons/favicon.png',
  replacePopover(x, y, data, index) {
    console.log(x, y, data, index, 'replace popover');
    popover.innerHTML =
      'value:' + data.value + '\nfrom:' + data.labels[1] + '\nto:' + data.labels[0];
    return popover;
  },
  onShowPopover(data, index) {
    console.log(data, index, 'show popover');
  },
  onHidePopover(data) {
    console.log('hide popover', data);
  },
};
const migrationLayer = L.migrationLayer(data, options);
migrationLayer.setStyle({ pulse: { radius: 20 } });
migrationLayer.setData([]);
map.remove(migrationLayer);
```


## API


### Data

| type                | description         |
| ------------------- | ------------------- |
| `[<MigrationData>]` | migration data list |

MigrationData

| name | type                          | description                     |
| --------- | ----------------------------- | ------------------------------- |
| labels    | `[<string>from, <string> to]` | label                           |
| from      | `[<number>lat, <number>lng]`  | from label latlng               |
| to      | `[<number>lat, <number>lng]`  | to label latlng                 |
| color     | string                        | the color of each arc and pulse |
| value     | number                        | intense value of migration line |

### Options

| name    | type    | default      | description                                  |
| --------- | ------- | ------------ | -------------------------------------------- |
| marker    | MarkerOption | - | marker style |
| line    | LineOption | - | line style |
| minZoom | number | 3 | migration layer display when zoom >= 3 |
|replacePopover|(`<pixel>x`, `<pixel>y`, `<MigrationData>data`, `<integer>index`) => Element | - |replace default popover by return element |
|onShowPopover|(`<MigrationData>data`, `<integer>index`) => void | - | called on mouse hover pulse |
| onHidePopover|(`<integer>index`) => void | none | called on mouse leave pulse |

MarkerOption

| name | type                          | default |description                     |
| --------- | -----------------------------| --- | ------------------------------- |
| radius    | `[<number>min, <number> max]`| [5, 10] | marker size range, measure by MigrationData.value |
| pulse | boolean | true | marker's ring animation |
| textVisible | boolean | false | whether marker label |

LineOption
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| width | number | 1 | migration line width |
| order | boolean | false | whether the sweep run in sequence |
| icon | LineIcon | { type: 'circle', size: 20 } | sweep header style |

LineIcon

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| type | `circle|arrow|img` | circle | icon type |
| imgUrl | string | - | Image url when type is img |
| size | number | 20 | icon size |

### Methods

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


## Requirements

- leaflet ^1.8.0
- node ^14.17.3
