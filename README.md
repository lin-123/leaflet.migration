# leaflet.migration

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

![alt text](.src/example.jpg)


## Envirenment
- node `v10.8.0`

## feature list
### 1.1.0
- [ ] layer.setStyle
- [ ] separate styles and data
- [ ] update return value of new MigrationLayer()

### 1.0.3
- [x] set pulse size by data value, radius, zoom

### 1.0.0
- [x] add webpack
- [x] add popover
- [x] config data, style
- [x] layer.setData