import Base from 'ol/layer/Base';
import LayerGroup from 'ol/layer/Group';
import { cjstd, seamless, specialRelief } from './gsi';
import osm from './osm';
import { vtLayer } from './vt';

export type BaseLayer = 'cjstd' | 'osm' | 'specialRelief' | 'vector' | 'seamless';

interface BaseLayerItem {
  id: BaseLayer;
  title: string;
  layer: Base;
}

export const baseLayers: BaseLayerItem[] = [
  { id: 'cjstd', title: '地理院地図', layer: cjstd },
  { id: 'specialRelief', title: '地形スペシャル', layer: specialRelief },
  { id: 'vector', title: '地理院地図Vector', layer: vtLayer },
  { id: 'seamless', title: '写真', layer: seamless },
  { id: 'osm', title: 'OpenStreetMap', layer: osm },
];

export const baseLayerGroup = new LayerGroup({
  layers: baseLayers.map(({ layer }) => layer),
});

export function setVisibleBaseLayer(baseLayer: BaseLayer): void {
  baseLayerGroup.getLayers().forEach((layer, index) => {
    layer.setVisible(baseLayers[index].id === baseLayer);
  });
}

export function isBaseLayer(str: any): str is BaseLayer {
  return str === 'cjstd' || str === 'osm' || str === 'specialRelief' || str === 'vector' || str === 'seamless';
}
