import Tile from 'ol/layer/tile';
import StamenSource from 'ol/source/stamen';

export const StamenTerrain = new Tile({
  source: new StamenSource({
    layer: 'terrain',
  }),
  title: 'World Terrain',
  subtitle: 'Stamen Terrain Map'
});

export const StamenToner = new Tile({
  source: new StamenSource({
    layer: 'toner',
  }),
  title: 'monochrome',
  subtitle: 'Stamen Toner Map'
});
