import Tile from 'ol/layer/tile';
import OSM from 'ol/source/osm';
import Attribution from 'ol/attribution';

export const osm = new Tile({
  source: new OSM({
    attributions: [
      new Attribution({
        html: '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
      })
    ]
  }),
  title: 'OpenStreetMap',
  subtitle: '© OpenStreetMap contributors',
  summary: '誰でも自由に利用できるような地理情報データの作成を目的とした地図'
});
