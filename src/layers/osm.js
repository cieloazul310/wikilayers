import Tile from 'ol/layer/tile';
import OSM from 'ol/source/osm';

export const osm = new Tile({
  source: new OSM(),
  title: 'OpenStreetMap',
  summary: '誰でも自由に利用できるような地理情報データの作成を目的とした地図'
});
