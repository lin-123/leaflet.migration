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
  const [clork, setClork] = useState(0);
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
        // [min, max]
        radius: [5, 10],
        // show marker ring animation
        pulse: true,
        textVisible: true
      },
      line: {
        width: 1,
        order: false,
        icon: {
          type: 'circle',
          imgUrl: '',
          size: 10
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
    const migrationLayer = L.migrationLayer(
      data,
      options,
    );

    const layer = migrationLayer.addTo(lrmap);
    self.current = { options, layer, migrationLayer, lrmap, direction: 'in' };
    setClork(clork + 1);
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

  const add = () => {
    if (migrationLayer && layer) return alert('图层已存在，请勿重复添加');
    const newData = randomDataByLen(10);
    self.current.migrationLayer = L.migrationLayer(newData, options);
    self.current.layer = self.current.migrationLayer.addTo(lrmap);
    setClork(clork + 1)
  }
  const remove = () => {
    lrmap.removeLayer(layer);
    delete self.current.migrationLayer;
    delete self.current.layer;
    setClork(clork + 1)
  }
  const show = () => migrationLayer.show();
  const hide = () => migrationLayer.hide();

  const changeDirection = () => {
    const { direction } = self.current;
    const newData = direction === 'in' ? inData : data;
    self.current.direction = direction === 'in' ? 'out':'in';
    self.current.migrationLayer.setData(newData);
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
