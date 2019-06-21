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
var data = [{
  labels: ['from', 'to'],
  from: [lat, lng],
  to: [lat, lng],
  color: '',
  value: ''
}];
var migrationLayer = L.migrationLayer(data, {
  pulseRadius: 10,
  arcWidth: 1,
  label: true,
}).addTo(map);

migrationLayer.setStyle({ pulse: { radius: 20 }})
migrationLayer.setData([])
map.remove(migrationLayer)
```

## API

Data `[<MigrationData>]`
attribute|type|description
--|--|--
labels|`[<string>from, <string> to]`|label
from|`[<number>lat, <number>lng]`|from label latlng
from|`[<number>lat, <number>lng]`|to label latlng
color|string|the color of each arc and pulse
value|number|intense value of migration line

Options
option|type|default|description
--|--|--|--
pulseRadius|number|10|pulse max radius, pulse radius from 3 to this value
arcWidth|number|1|arc border width
label|boolean|true|set it to false if you don't want show label

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

## feature list
### 2.0.0
- [x] accomplish setData/setStyle
- [x] accomplish addTo and remove function
- [x] update init options

### 1.1.0
- [x] update return value of new MigrationLayer()

### 1.0.3
- [x] set pulse size by data value, radius, zoom

### 1.0.0
- [x] add webpack
- [x] add popover
- [x] config data, style
- [x] layer.setData