import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVTFormat from 'ol/format/MVT';

export const layerNames = ['waterarea', 'coastline', 'road', 'railway', 'boundary', 'label', 'building', 'contour', 'transp'];

export const vtLayer = new VectorTileLayer({
  source: new VectorTileSource({
    format: new MVTFormat({
      layers: layerNames,
    }),
    url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf',
    attributions:
      '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院</a>',
  }),
  declutter: true,
});
