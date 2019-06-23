# TODO
- [ ] unit test
- [ ] 建一个 单例 作为公共store
- [ ] style, data 参数校验
- [ ] export speed to config

- [x] rewrite readme by leaflet plugin guide

# way
```javascript
{
  // labels, value
  onShowPopover: (x, y, labels, value) => {}
  onHidePopover: ()
}
```

# NOTE
- leaflet plugin rfc: https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md#presentation

## how to make leaflet plugin
- some documents:
  - [leaflet Class, Evented, Layer](https://leafletjs.com/reference-1.5.0.html#class)
  - [leaflet plugin guide](https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md#demo)
  - [art of readme](https://github.com/noffle/art-of-readme)
  - [example](https://github.com/dynmeth/RaphaelLayer/blob/master/src/layer/FeatureGroup.js)

- 实现一个 leaflet 图层插件
- 继承 L.Layer 类，需要实现的方法：
  - initialize: 当图层类初始化的时候调用 const layer = L.yourLayer(option)
  - onAdd: 当图层被添加到 leaflet 实例上的时候调用 layer.addTo(map)
  - onRemove: map.remove(layer)
- 每个函数都有返回值， 不知道返回什么的时候返回this