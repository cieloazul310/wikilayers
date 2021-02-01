import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import MVTFormat from "ol/format/MVT";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import { transformExtent } from "ol/proj";
const JapanExtent = transformExtent(
  [120, 20, 154, 46],
  "EPSG:4326",
  "EPSG:3857"
);

export const waterarea = new VectorTileLayer({
  source: new VectorTileSource({
    format: new MVTFormat({
      layers: ['waterarea'],
    }),
    url: 'https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf',
    attributions:
      '<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment" target="_blank" rel=”noopener noreferrer”>国土地理院</a>',
  }),
  style: new Style({
    fill: new Fill({ color: '#adf' }),
  }),
  extent: JapanExtent,
  minResolution: 4.77,
});
