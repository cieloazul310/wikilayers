import {
  cjstd,
  seamless,
  photo70s,
  relief,
  slope,
  specialRelief
} from '../layers/gsi';
import { osm } from '../layers/osm';
import { StamenTerrain, StamenToner } from '../layers/stamen';
import setLayerBlend from './setLayerBlend';

export const layers = [
  cjstd,
  osm,
  seamless,
  photo70s,
  relief,
  slope,
  specialRelief,
  StamenTerrain,
  StamenToner
];

export const layersConfig = layers.map(lyr => ({
  title: lyr.get('title'), // Required
  subtitle: lyr.get('subtitle') || '',
  summary: lyr.get('summary') || ''
}));

export function initialBaseLayers() {
  setLayerBlend(specialRelief.getLayers().getArray()[3]);
  return layers;
}