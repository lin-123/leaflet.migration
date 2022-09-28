---
order: 2
---

# 更新日志

## TODO

- [ ] 渲染性能优化， 可以支持上万个点同时运动

  - 提前把各个扫尾的点的下一个位置计算好， 然后调用 canvas redraw

### 2.3.4
- fixbug: migration layer cannot fit size&position when map changed

### 2.3.0
- [x] 整理 api， 扩展 marker/line/style 等

  - [x] 切换成 ts
  - [x] demo 调通

- [x] 飞线支持 marker 支持 圆、箭头、自定义图片

### 2.2.0

- [x] options 新增了一个 order 参数，可以控制轨迹动画是否按顺序播放

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
