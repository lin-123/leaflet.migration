# leaflet.migration
leaflet plugin that provides migration layer.

## Usage
```
npm install -S leaflet.migration
```

### Example

```javascript
var migrationLayer = L.migrationLayer({
  map: lrmap,
  data: [{
    labels: ['from', 'to'],
    from: [lat, lng],
    to: [lat, lng],
    color: '',
    value: ''
  }],
  // migration style
  style: {
    pulse: {
      radius: 30,
      borderWidth: 3
    },
    arc: {
      width: 1,
      label: true,
    }
  }
});

// change data
migrationLayer.setData([{}])
```

![alt text](public/example.jpg)

## Development
- npm start
- web server will listen on 3000
- open http://localhost:3000

## Envirenment
- node `v10.8.0`

## feature list
### 1.1.0
- [ ] export speed to config
- [ ] layer.setStyle
- [ ] separate styles and data
- [x] update return value of new MigrationLayer()
- [ ] migration

### 1.0.3
- [x] set pulse size by data value, radius, zoom

### 1.0.0
- [x] add webpack
- [x] add popover
- [x] config data, style
- [x] layer.setData