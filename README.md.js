(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{KABQ:function(e,t,l){},gql7:function(e,t,l){"use strict";l.r(t);var a=l("ahKI"),n=l.n(a),r=l("Mzb3"),c=l("YURV"),m=l("hDJC"),u=n.a.memo((e=>{e.demos;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"leafletmigration"},n.a.createElement(r["AnchorLink"],{to:"#leafletmigration","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"leaflet.migration"),n.a.createElement("p",null,"leaflet plugin that provides migration lines layer."),n.a.createElement("img",{src:l("pTQW")}),n.a.createElement("h2",{id:"installation"},n.a.createElement(r["AnchorLink"],{to:"#installation","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Installation"),n.a.createElement(c["a"],{code:"npm install -S leaflet.migration",lang:"unknown"}),n.a.createElement("h2",{id:"demo"},n.a.createElement(r["AnchorLink"],{to:"#demo","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement(r["Link"],{to:"https://lin-123.github.io/leaflet.migration/"},"Demo")),n.a.createElement(c["a"],{code:"import L from 'leaflet';\nimport 'leaflet/dist/leaflet.css';\nimport 'leflet.migration';\nconst data = [\n  {\n    labels: ['from', 'to'],\n    from: [lat, lng],\n    to: [lat, lng],\n    color: '',\n    value: '',\n  },\n];\nconst popover = document.querySelector('.popover');\nconst options = {\n  marker: {\n    radius: [5, 10],\n    pulse: true,\n    textVisible: true\n  },\n  line: {\n    width: 1,\n    order: false,\n    icon: {\n      type: 'arrow',\n      imgUrl: '',\n      size: 20\n    },\n  },\n  // marker: 'https://github.githubassets.com/favicons/favicon.png',\n  replacePopover(x, y, data, index) {\n    console.log(x, y, data, index, 'replace popover');\n    popover.innerHTML =\n      'value:' + data.value + '\\nfrom:' + data.labels[1] + '\\nto:' + data.labels[0];\n    return popover;\n  },\n  onShowPopover(data, index) {\n    console.log(data, index, 'show popover');\n  },\n  onHidePopover(data) {\n    console.log('hide popover', data);\n  },\n};\nconst migrationLayer = L.migrationLayer(data, options);\nmigrationLayer.setStyle({ pulse: { radius: 20 } });\nmigrationLayer.setData([]);\nmap.remove(migrationLayer);",lang:"javascript"}),n.a.createElement("h2",{id:"api"},n.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"data"},n.a.createElement(r["AnchorLink"],{to:"#data","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Data"),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"type"),n.a.createElement("th",null,"description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"[<MigrationData>]")),n.a.createElement("td",null,"migration data list")))),n.a.createElement("p",null,"MigrationData"),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"name"),n.a.createElement("th",null,"type"),n.a.createElement("th",null,"description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"labels"),n.a.createElement("td",null,n.a.createElement("code",null,"[<string>from, <string> to]")),n.a.createElement("td",null,"label")),n.a.createElement("tr",null,n.a.createElement("td",null,"from"),n.a.createElement("td",null,n.a.createElement("code",null,"[<number>lat, <number>lng]")),n.a.createElement("td",null,"from label latlng")),n.a.createElement("tr",null,n.a.createElement("td",null,"to"),n.a.createElement("td",null,n.a.createElement("code",null,"[<number>lat, <number>lng]")),n.a.createElement("td",null,"to label latlng")),n.a.createElement("tr",null,n.a.createElement("td",null,"color"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"the color of each arc and pulse")),n.a.createElement("tr",null,n.a.createElement("td",null,"value"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"intense value of migration line")))),n.a.createElement("h3",{id:"options"},n.a.createElement(r["AnchorLink"],{to:"#options","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Options"),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"name"),n.a.createElement("th",null,"type"),n.a.createElement("th",null,"default"),n.a.createElement("th",null,"description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"marker"),n.a.createElement("td",null,"MarkerOption"),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"marker style")),n.a.createElement("tr",null,n.a.createElement("td",null,"line"),n.a.createElement("td",null,"LineOption"),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"line style")),n.a.createElement("tr",null,n.a.createElement("td",null,"minZoom"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"3"),n.a.createElement("td",null,"migration layer display when zoom >= 3")),n.a.createElement("tr",null,n.a.createElement("td",null,"replacePopover"),n.a.createElement("td",null,"(",n.a.createElement("code",null,"<pixel>x"),", ",n.a.createElement("code",null,"<pixel>y"),", ",n.a.createElement("code",null,"<MigrationData>data"),", ",n.a.createElement("code",null,"<integer>index"),") => Element"),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"replace default popover by return element")),n.a.createElement("tr",null,n.a.createElement("td",null,"onShowPopover"),n.a.createElement("td",null,"(",n.a.createElement("code",null,"<MigrationData>data"),", ",n.a.createElement("code",null,"<integer>index"),") => void"),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"called on mouse hover pulse")),n.a.createElement("tr",null,n.a.createElement("td",null,"onHidePopover"),n.a.createElement("td",null,"(",n.a.createElement("code",null,"<integer>index"),") => void"),n.a.createElement("td",null,"none"),n.a.createElement("td",null,"called on mouse leave pulse")))),n.a.createElement("p",null,"MarkerOption"),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"name"),n.a.createElement("th",null,"type"),n.a.createElement("th",null,"default"),n.a.createElement("th",null,"description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"radius"),n.a.createElement("td",null,n.a.createElement("code",null,"[<number>min, <number> max]")),n.a.createElement("td",null,"[5, 10]"),n.a.createElement("td",null,"marker size range, measure by MigrationData.value")),n.a.createElement("tr",null,n.a.createElement("td",null,"pulse"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"true"),n.a.createElement("td",null,"marker's ring animation")),n.a.createElement("tr",null,n.a.createElement("td",null,"textVisible"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"false"),n.a.createElement("td",null,"whether marker label")))),n.a.createElement("p",null,"LineOption"),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"name"),n.a.createElement("th",null,"type"),n.a.createElement("th",null,"default"),n.a.createElement("th",null,"description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"width"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"1"),n.a.createElement("td",null,"migration line width")),n.a.createElement("tr",null,n.a.createElement("td",null,"order"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"false"),n.a.createElement("td",null,"whether the sweep run in sequence")),n.a.createElement("tr",null,n.a.createElement("td",null,"icon"),n.a.createElement("td",null,"LineIcon"),n.a.createElement("td",null,"{"," type: 'circle', size: 20 ","}"),n.a.createElement("td",null,"sweep header style")))),n.a.createElement("p",null,"LineIcon"),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"name"),n.a.createElement("th",null,"type"),n.a.createElement("th",null,"default"),n.a.createElement("th",null,"description"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"type"),n.a.createElement("td",null,"`circle"),n.a.createElement("td",null,"arrow"),n.a.createElement("td",null,"img`")),n.a.createElement("tr",null,n.a.createElement("td",null,"imgUrl"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"Image url when type is img")),n.a.createElement("tr",null,n.a.createElement("td",null,"size"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"20"),n.a.createElement("td",null,"icon size")))),n.a.createElement("h3",{id:"methods"},n.a.createElement(r["AnchorLink"],{to:"#methods","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Methods"),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"method"),n.a.createElement("th",null,"returns"),n.a.createElement("th",null,"descrition"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"setData(",n.a.createElement("code",null,"[<MigrationData>]"),")"),n.a.createElement("td",null,"this"),n.a.createElement("td",null,"update migration data")),n.a.createElement("tr",null,n.a.createElement("td",null,"setStyle(options)"),n.a.createElement("td",null,"this"),n.a.createElement("td",null,"update style")),n.a.createElement("tr",null,n.a.createElement("td",null,"show()"),n.a.createElement("td",null,"this"),n.a.createElement("td",null,"show layer")),n.a.createElement("tr",null,n.a.createElement("td",null,"hide()"),n.a.createElement("td",null,"this"),n.a.createElement("td",null,"hide layer")),n.a.createElement("tr",null,n.a.createElement("td",null,"play()"),n.a.createElement("td",null,"this"),n.a.createElement("td",null,"run animate of arc and pulse")),n.a.createElement("tr",null,n.a.createElement("td",null,"pause()"),n.a.createElement("td",null,"this"),n.a.createElement("td",null,"pause animate of arc and pulse")))),n.a.createElement("p",null,"Methods inherited from ",n.a.createElement(r["Link"],{to:"https://leafletjs.com/reference-1.5.0.html#layer"},"L.Layer")),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"method"),n.a.createElement("th",null,"returns"),n.a.createElement("th",null,"descrition"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"onAdd(",n.a.createElement("code",null,"<Map> map"),")"),n.a.createElement("td",null,"this"),n.a.createElement("td",null,"called on L.migrationLayer(data, style).addTo(map)")),n.a.createElement("tr",null,n.a.createElement("td",null,"onRemove(",n.a.createElement("code",null,"<Map> map"),")"),n.a.createElement("td",null,"this"),n.a.createElement("td",null,"called on map.remove(migrationLayer)")))),n.a.createElement("h2",{id:"requirements"},n.a.createElement(r["AnchorLink"],{to:"#requirements","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Requirements"),n.a.createElement("ul",null,n.a.createElement("li",null,"leaflet ^1.8.0"),n.a.createElement("li",null,"node ^14.17.3"))))}));t["default"]=e=>{var t=n.a.useContext(r["context"]),l=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(u,{demos:l})}},hDJC:function(e,t,l){"use strict";var a=l("ahKI"),n=l.n(a),r=l("bIC1"),c=l.n(r);l("KABQ");function m(e,t){return E(e)||d(e,t)||o(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return i(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=new Array(t);l<t;l++)a[l]=e[l];return a}function d(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a,n,r=[],c=!0,m=!1;try{for(l=l.call(e);!(c=(a=l.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(u){m=!0,n=u}finally{try{c||null==l["return"]||l["return"]()}finally{if(m)throw n}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(a["useRef"])(),r=Object(a["useState"])(!1),u=m(r,2),o=u[0],i=u[1],d=Object(a["useState"])(!1),E=m(d,2),s=E[0],h=E[1];return Object(a["useEffect"])((function(){var e=l.current,t=c()((function(){i(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":o||void 0,"data-right-folded":s||void 0},n.a.createElement("table",null,t)))};t["a"]=s},pTQW:function(e,t,l){e.exports=l.p+"static/leaflet.migration-demo.ca5bd76c.gif"}}]);