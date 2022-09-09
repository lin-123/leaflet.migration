---
order: 1
---

# Demo

```jsx
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.migration';
import { data, inData, randomDataByLen } from './demo';

export default () => {
  const [ready, setReady] = useState(false);
  const self = useRef({});

  useEffect(() => {
    const lrmap = L.map('map1').setView([35.4199, 95.2402], 4);
    L.tileLayer(
      'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
      {
        subdomains: ['1', '2', '3', '4'],
      },
    ).addTo(lrmap);

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
    const migrationLayer = L.migrationLayer(
      data,
      options,
    );

    const layer = migrationLayer.addTo(lrmap);
    self.current = { options, layer, migrationLayer, lrmap, direction: 'in' };
    setReady(true);
  }, []);

  const { options, migrationLayer, layer, lrmap } = self.current;

  const rendomData = () => {
    self.current.migrationLayer.setData(randomDataByLen(Math.floor(30 * Math.random())));
  };
  const rendomStyle = () => {
    options.marker.radius[1] = Math.random() * 20;
    options.line.width = Math.random() * 5;
    self.current.migrationLayer.setStyle(options);
  };
  const add = () => migrationLayer.addTo(lrmap);
  const remove = () => lrmap.removeLayer(layer);
  const show = () => migrationLayer.show();
  const hide = () => migrationLayer.hide();

  const changeDirection = () => {
    lrmap.removeLayer(self.current.layer);
    const { direction } = self.current;
    const newData = direction === 'in' ? inData : data;
    self.current.direction = direction === 'in' ? 'out':'in';
    self.current.migrationLayer = L.migrationLayer(newData, options);
    self.current.layer = self.current.migrationLayer.addTo(lrmap);
  };

  return (
    <div>
      <div id="map1" style={{ height: 600 }}></div>
      <div className="control">
        <button onClick={rendomData}>rendomData</button>
        <button onClick={rendomStyle}>rendomStyle</button>
        <button onClick={show}>show</button>
        <button onClick={hide}>hide</button>
        <button onClick={changeDirection}>changeDirection</button>

        <button onClick={add}>add</button>
        <button onClick={remove}>remove</button>
      </div>
      <div className="popover"></div>
    </div>
  );
};
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
