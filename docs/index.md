## leaflet.migration

```jsx
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.migration';
import { data, inData } from './demo';

export default () => {
  const [ready, setReady] = useState(false);
  const self = useRef({});

  useEffect(() => {
    const lrmap = L.map('map1').setView([35.4199, 95.2402], 4);
    L.tileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
      subdomains: ["1", "2", "3", "4"]
    }).addTo(lrmap);

    const popover = document.querySelector('.popover');
    const options = {
      minRadius: 5,
      maxRadius: 10,
      arcWidth: 0.1,
      label: true,
      order: false,
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
    const migrationLayer = L.migrationLayer(data.map(i => Object.assign(i, {  })), options);
    const layer = migrationLayer.addTo(lrmap);
    self.current = { options, layer, migrationLayer, lrmap };
    setReady(true);
  }, []);

  const { options, migrationLayer, layer, lrmap } = self.current;

  const rendomData = function () {
    const newData = data.map(item => {
      return {
        ...item,
        value: parseInt(Math.random() * 100)
      }
    });
    self.current.migrationLayer.setData(newData);
  }
  const rendomStyle = function () {
    options.pulseRadius = Math.random() * 20
    options.arcWidth = Math.random() * 5
    self.current.migrationLayer.setStyle(options)
  }
  const add = function () {
    migrationLayer.addTo(lrmap)
  }
  const remove = function () {
    lrmap.removeLayer(layer)
  }
  const show = function () {
    migrationLayer.show()
  }
  const hide = function () {
    migrationLayer.hide()
  }
  const changeDirection = function () {
    lrmap.removeLayer(layer)
    const newOptions = Object.assign(options, { direction: 'in'});
    self.current.migrationLayer = L.migrationLayer(inData, newOptions)
    self.current.layer = self.current.migrationLayer.addTo(lrmap)
  }

  return <div class="box">
    <div id="map1" style={{ height: 600 }}></div>
    <div class="control">
      <button onClick={rendomData}>rendomData</button>
      <button onClick={rendomStyle}>rendomStyle</button>
      <button onClick={show}>show</button>
      <button onClick={hide}>hide</button>
      <button onClick={changeDirection}>changeDirection</button>

      <button onClick={add}>add</button>
      <button onClick={remove}>remove</button>
    </div>
    <div class="popover"></div>
  </div>;
}

```