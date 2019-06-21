# TODO
- [x] 配置数据
- [x] 根据 leaflet 官方结构调整代码结构
- [ ] add demo to gh-pages
- [ ] 配置样式
- [ ] 根据 zoom 来调整 pulse 的半径
- [ ] 重新梳理配置项

# NOTE
- leaflet plugin rfc: https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md#presentation

## how to make leaflet plugin
- some documents:
  - [leaflet Class, Evented, Layer](https://leafletjs.com/reference-1.5.0.html#class)
  - [lefalet plugin guide](https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md#demo)
  - [art of readme](https://github.com/noffle/art-of-readme)
  - [example](https://github.com/dynmeth/RaphaelLayer/blob/master/src/layer/FeatureGroup.js)

- 实现一个 leaflet 图层插件
- 继承 L.Layer 类，需要实现的方法：
  - initialize: 当图层类初始化的时候调用 const layer = L.yourLayer(option)
  - onAdd: 当图层被添加到 leaflet 实例上的时候调用 layer.addTo(map)
  - onRemove: map.remove(layer)
