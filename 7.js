(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{rrNk:function(e,t,n){"use strict";n.r(t),n.d(t,"MapContext",(function(){return s})),n.d(t,"useMapContext",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("vrbx"),o=n.n(c),s=(n("sENK"),u.a.createContext({map:null})),i=()=>u.a.useContext(s);function d(e){var t=e.latitude,n=e.longitude,c=e.zoom,i=e.children,d=e.style,l=Object(r["useState"])(!1),p=Object(a["default"])(l,2),f=p[0],b=p[1],m=Object(r["useRef"])(),v=Object(r["useRef"])();return Object(r["useEffect"])((()=>{var e=o.a.map(m.current).setView([t,n],c);return o.a.tileLayer("http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",{subdomains:["1","2","3","4"]}).addTo(e),v.current=e,b(!0),()=>{e.remove()}}),[]),u.a.createElement(s.Provider,{value:{map:v.current}},u.a.createElement("div",{ref:m,style:d},f&&i))}}}]);