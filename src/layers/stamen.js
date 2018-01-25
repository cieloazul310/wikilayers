import Tile from 'ol/layer/tile';
import StamenSource from 'ol/source/stamen';

export const StamenTerrain = new Tile({
  source: new StamenSource({
    layer: 'terrain',
  }),
  title: 'World Terrain',
  subtitle: 'Stamen Terrain Map',
  summary: '全世界対応の地勢地図'
});

export const StamenToner = new Tile({
  source: new StamenSource({
    layer: 'toner',
  }),
  title: 'monochrome',
  subtitle: 'Stamen Toner Map',
  summary: '全世界対応のモノクロ地図'
});
