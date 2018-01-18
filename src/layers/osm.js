import Tile from 'ol/layer/tile';
import OSM from 'ol/source/osm';

export const osm = new Tile({
  source: new OSM(),
  title: 'OpenStreetMap'
});
