(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"9kvl":function(e,n,t){"use strict";var r=t("FfOG");t.d(n,"a",(function(){return r["b"]}));t("bCY9")},afA6:function(e,n,t){"use strict";t.r(n);var r=t("mn0l"),a=t("ahKI"),o=t.n(a),i=t("q3YX"),l=t("DBVu"),s=t("GAyR"),c=t("wMDr"),u="// \u6279\u91cf\u6a21\u62df\u6570\u636e\nconst randomNum = (start, end) => Math.floor(start + (end - start) * Math.random());\nexport const genData = (length, interator) => {\n  return Array.from({ length }, (i, idx) => {\n    return interator({\n      color: 'rgb(101, 169, 249)',\n      from: [randomNum(84, 116), randomNum(32, 48)],\n      to: [randomNum(84, 116), randomNum(32, 48)],\n      labels: [`from-${idx}`, `to-${idx}`],\n      value: randomNum(1, 10),\n    });\n  });\n};\n\nexport const randomDataByLen = (len) => genData(len, (i) => ({\n  ...i,\n  // to: [116.404844, 32.91405],\n  from: [116.404844, 39.91405],\n  labels: ['\u5317\u4eac', i.labels[1]]\n}));\n\nexport const data = randomDataByLen(10);\n\nexport const inData = genData(10, (i) => ({\n  ...i,\n  color: 'rgba(251,176,49,0.8)',\n  to: [116.404844, 39.91405],\n  labels: [i.labels[0], '\u5317\u4eac']\n}));",d={"demo-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(s["a"])(Object(l["a"])().mark((function e(){var n,r,a,o,i,s,c;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("P/vu")["default"],r=t("uKmp")["default"],e.t0=r,e.next=5,Promise.resolve().then(t.bind(null,"iojd"));case 5:return e.t1=e.sent,a=(0,e.t0)(e.t1),e.t2=n,e.next=10,Promise.resolve().then(t.t.bind(null,"ahKI",7));case 10:return e.t3=e.sent,o=(0,e.t2)(e.t3),e.t4=r,e.next=15,t.e(4).then(t.t.bind(null,"vrbx",7));case 15:return e.t5=e.sent,i=(0,e.t4)(e.t5),e.next=19,t.e(13).then(t.t.bind(null,"sENK",7));case 19:return e.next=21,Promise.all([t.e(2),t.e(4),t.e(12),t.e(15)]).then(t.bind(null,"/7QA"));case 21:return e.next=23,t.e(14).then(t.bind(null,"oZd6"));case 23:return s=e.sent,c=function(){var e=(0,o.useState)(0),n=(0,a["default"])(e,2),t=n[0],r=n[1],l=(0,o.useRef)({});(0,o.useEffect)((function(){var e=i["default"].map("map1").setView([35.4199,95.2402],4);i["default"].tileLayer("http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",{subdomains:["1","2","3","4"]}).addTo(e);var n=document.querySelector(".popover"),a={marker:{radius:[5,10],pulse:!0,textVisible:!0},line:{width:1,order:!1,icon:{type:"circle",imgUrl:"",size:10}},replacePopover:function(e,t,r,a){return console.log(e,t,r,a,"show popover"),n.innerHTML="value:"+r.value+"\nfrom:"+r.labels[1]+"\nto:"+r.labels[0],n},onShowPopover:function(e,n,t,r){console.log(e,n,t,r,"show popover")},onHidePopover:function(e){console.log("hide popover",e)}},o=i["default"].migrationLayer(s.data,a),c=o.addTo(e);l.current={options:a,layer:c,migrationLayer:o,lrmap:e,direction:"in"},r(t+1)}),[]);var c=l.current,u=c.options,d=c.migrationLayer,m=c.layer,p=c.lrmap,f=function(){l.current.migrationLayer.setData((0,s.randomDataByLen)(Math.floor(30*Math.random())))},h=function(){u.marker.radius[1]=20*Math.random(),u.line.width=5*Math.random(),l.current.migrationLayer.setStyle(u)},v=function(){if(d&&m)return alert("\u56fe\u5c42\u5df2\u5b58\u5728\uff0c\u8bf7\u52ff\u91cd\u590d\u6dfb\u52a0");var e=(0,s.randomDataByLen)(10);l.current.migrationLayer=i["default"].migrationLayer(e,u),l.current.layer=l.current.migrationLayer.addTo(p),r(t+1)},g=function(){p.removeLayer(m),delete l.current.migrationLayer,delete l.current.layer,r(t+1)},y=function(){return d.show()},b=function(){return d.hide()},x=function(){var e=l.current.direction,n="in"===e?s.inData:s.data;l.current.direction="in"===e?"out":"in",l.current.migrationLayer.setData(n)};return o["default"].createElement("div",null,o["default"].createElement("div",{id:"map1",style:{height:600}}),o["default"].createElement("div",{className:"control"},o["default"].createElement("button",{onClick:f},"rendomData"),o["default"].createElement("button",{onClick:h},"rendomStyle"),o["default"].createElement("button",{onClick:y},"show"),o["default"].createElement("button",{onClick:b},"hide"),o["default"].createElement("button",{onClick:x},"changeDirection"),o["default"].createElement("button",{onClick:v},"add"),o["default"].createElement("button",{onClick:g},"remove")),o["default"].createElement("div",{className:"popover"}))},e.abrupt("return",c);case 26:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:"import React, { useEffect, useRef, useState } from 'react';\nimport L from 'leaflet';\nimport 'leaflet/dist/leaflet.css';\nimport 'leaflet.migration';\nimport { data, inData, randomDataByLen } from './demo';\n\nexport default () => {\n  const [clork, setClork] = useState(0);\n  const self = useRef({});\n\n  useEffect(() => {\n    const lrmap = L.map('map1').setView([35.4199, 95.2402], 4);\n    L.tileLayer(\n      'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',\n      {\n        subdomains: ['1', '2', '3', '4'],\n      },\n    ).addTo(lrmap);\n\n    const popover = document.querySelector('.popover');\n    const options = {\n      marker: {\n        // \u6700\u5c0f\u534a\u5f84\u3001\u6700\u5927\u534a\u5f84\n        radius: [5, 10],\n        // \u662f\u5426\u663e\u793a\u6ce2\u7eb9\u52a8\u9500\n        pulse: true,\n        textVisible: true\n      },\n      // \u98de\u7ebf\n      line: {\n        // \u98de\u7ebf\u5bbd\u5ea6\n        width: 1,\n        // \u662f\u5426\u6309\u987a\u5e8f\u8d70\u98de\u7ebf\n        order: false,\n        icon: {\n          type: 'circle',\n          imgUrl: '',\n          size: 10\n        },\n      },\n      // marker: 'https://github.githubassets.com/favicons/favicon.png',\n      replacePopover(x, y, data, index) {\n        console.log(x, y, data, index, 'show popover');\n        popover.innerHTML =\n          'value:' + data.value + '\\nfrom:' + data.labels[1] + '\\nto:' + data.labels[0];\n        return popover;\n      },\n      onShowPopover(x, y, data, index) {\n        console.log(x, y, data, index, 'show popover');\n      },\n      onHidePopover(index) {\n        console.log('hide popover', index);\n      },\n    };\n    const migrationLayer = L.migrationLayer(\n      data,\n      options,\n    );\n\n    const layer = migrationLayer.addTo(lrmap);\n    self.current = { options, layer, migrationLayer, lrmap, direction: 'in' };\n    setClork(clork + 1);\n  }, []);\n\n  const { options, migrationLayer, layer, lrmap } = self.current;\n\n  const rendomData = () => {\n    self.current.migrationLayer.setData(randomDataByLen(Math.floor(30 * Math.random())));\n  };\n  const rendomStyle = () => {\n    options.marker.radius[1] = Math.random() * 20;\n    options.line.width = Math.random() * 5;\n    self.current.migrationLayer.setStyle(options);\n  };\n\n  const add = () => {\n    if (migrationLayer && layer) return alert('\u56fe\u5c42\u5df2\u5b58\u5728\uff0c\u8bf7\u52ff\u91cd\u590d\u6dfb\u52a0');\n    const newData = randomDataByLen(10);\n    self.current.migrationLayer = L.migrationLayer(newData, options);\n    self.current.layer = self.current.migrationLayer.addTo(lrmap);\n    setClork(clork + 1)\n  }\n  const remove = () => {\n    lrmap.removeLayer(layer);\n    delete self.current.migrationLayer;\n    delete self.current.layer;\n    setClork(clork + 1)\n  }\n  const show = () => migrationLayer.show();\n  const hide = () => migrationLayer.hide();\n\n  const changeDirection = () => {\n    const { direction } = self.current;\n    const newData = direction === 'in' ? inData : data;\n    self.current.direction = direction === 'in' ? 'out':'in';\n    self.current.migrationLayer.setData(newData);\n  };\n\n  return (\n    <div>\n      <div id=\"map1\" style={{ height: 600 }}></div>\n      <div className=\"control\">\n        <button onClick={rendomData}>rendomData</button>\n        <button onClick={rendomStyle}>rendomStyle</button>\n        <button onClick={show}>show</button>\n        <button onClick={hide}>hide</button>\n        <button onClick={changeDirection}>changeDirection</button>\n\n        <button onClick={add}>add</button>\n        <button onClick={remove}>remove</button>\n      </div>\n      <div className=\"popover\"></div>\n    </div>\n  );\n};"},"demo.js":{import:"./demo",content:u}},dependencies:{react:{version:"18.2.0"},leaflet:{version:"1.8.0",css:"leaflet/dist/leaflet.css"},"leaflet.migration":{version:"2.3.1"}},identifier:"demo-demo"}},"play-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(s["a"])(Object(l["a"])().mark((function e(){var n,r,a;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("uKmp")["default"],e.t0=n,e.next=4,Promise.resolve().then(t.t.bind(null,"ahKI",7));case 4:return e.t1=e.sent,r=(0,e.t0)(e.t1),a=function(){var e=r["default"].useRef(null);return r["default"].useEffect((function(){var n=document.createElement("img");n.src="https://github.githubassets.com/favicons/favicon.png",n.width=100;var t=e.current.getContext("2d");n.onload=function(){t.save(),t.rotate(Math.PI/180*60),t.drawImage(n,20,-20),t.restore()}}),[]),r["default"].createElement("div",null,r["default"].createElement("img",{src:"https://github.githubassets.com/favicons/favicon.png"}),r["default"].createElement("canvas",{ref:e,style:{border:"1px solid",width:100,height:100}}))},e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:"import React from 'react';\nexport default () => {\n  const canvas = React.useRef(null);\n  React.useEffect(() => {\n    const img = document.createElement('img');\n    img.src = 'https://github.githubassets.com/favicons/favicon.png';\n    img.width = 100;\n\n    const ctx = canvas.current.getContext('2d');\n    img.onload = () => {\n      ctx.save();\n      ctx.rotate(60*(Math.PI/180));\n      ctx.drawImage(img, 20, -20);\n      ctx.restore();\n    }\n  }, []);\n\n  return <div>\n    <img src=\"https://github.githubassets.com/favicons/favicon.png\"/>\n    <canvas ref={canvas} style={{ border: '1px solid', width: 100, height: 100 }} />\n  </div>\n}"}},dependencies:{react:{version:"18.2.0"}},identifier:"play-demo"}}},m=t("x2v5"),p=t("BXQl"),f=t.n(p);n["default"]=e=>o.a.createElement(f.a,Object(r["a"])({},e,{config:i,demos:d,apis:m}))},q3YX:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"leaflet.migration","meta":{"order":null}},{"path":"/demo","title":"Demo","meta":{"order":1}},{"path":"/changelog","title":"\u66f4\u65b0\u65e5\u5fd7","meta":{"order":2}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{},"title":"leaflet.migration","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"doc","repository":{"url":"","branch":"master"},"theme":{}}')},x2v5:function(e){e.exports=JSON.parse("{}")}}]);