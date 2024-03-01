/**
 * base map with tillayer
 *
 * */
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const MapContext = React.createContext<any>({
  map: null,
});
export const useMapContext = () => React.useContext(MapContext);

export default function BaseMap({
  latitude, longitude, zoom, children, style
}) {
  const [ready, setReady] = useState(false);
  const elRef = useRef<any>();
  const mapRef = useRef<any>();

  useEffect(() => {
    const map = L.map(elRef.current).setView([latitude, longitude], zoom);
    L.tileLayer(
      'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
      {
        subdomains: ['1', '2', '3', '4'],
      },
    ).addTo(map);
    mapRef.current = map;
    setReady(true);
    return () => {
      map.remove();
    }
  }, []);

  return (
    <MapContext.Provider value={{ map: mapRef.current }}>
      <div ref={elRef} style={style}>
        {ready && children}
      </div>
    </MapContext.Provider>
  );
}
