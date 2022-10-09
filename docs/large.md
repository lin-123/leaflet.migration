---
order: 1
---

# large

```jsx
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.migration';
import { data, inData, randomDataByLen } from './demo';

export default () => {
  useEffect(() => {
    const lrmap = L.map('map1').setView([35.4199, 95.2402], 4);
    L.tileLayer(
      'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
      {
        subdomains: ['1', '2', '3', '4'],
      },
    ).addTo(lrmap);
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
          size: 10
        },
      },
    };
    const migrationLayer = L.migrationLayer(
      randomDataByLen(300),
      options,
    );

    const layer = migrationLayer.addTo(lrmap);
  }, []);

  return (
    <div id="map1" style={{ height: 600 }}></div>
  );
};
```
