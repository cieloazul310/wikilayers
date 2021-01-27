import Tile from 'ol/layer/Tile';
import StamenSource from 'ol/source/Stamen';

export const StamenTerrain = new Tile({
  source: new StamenSource({
    layer: 'terrain',
  }),
});

export const StamenToner = new Tile({
  source: new StamenSource({
    layer: 'toner',
  }),
});
