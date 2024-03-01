import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet.migration';
import { useMapContext } from './BaseMap';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';

const MigrationLayer = forwardRef(({
  visible = true, data, options, replacePopover, onShowPopover, onHidePopover,
}, ref) => {
  const { map } = useMapContext();
  const layerRef = useRef<any>(null);
  const getOptions = () => ({
    ...options,
    replacePopover, onShowPopover, onHidePopover
  });
  // 留着备用
  useImperativeHandle(ref, () => ({
    target: layerRef.current,
  }));

  useEffect(() => {
    if (!map) return;

    layerRef.current = L.migrationLayer(data, getOptions());
    console.log(map)
    const layer = map.addLayer(layerRef.current);
    return () => {
      map.removeLayer(layer);
    }
  }, []);

  useEffect(() => {
    layerRef.current?.setData(data);
  }, [data])

  useEffect(() => {
    layerRef.current?.setStyle(getOptions()); // 确保options变化时重新设置图层选项
  }, [options]);

  useEffect(() => {
    layerRef.current[visible ? 'show' : 'hide']();
  }, [visible]);
  return null;
});

export default MigrationLayer;
