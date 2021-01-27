import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import TopoFormat from "ol/format/TopoJSON";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import { transformExtent } from "ol/proj";
const Lakes = require("../data/lakes.topojson");

const ksjAttribution = (title) =>
  `<a href="http://nlftp.mlit.go.jp/ksj/" target="_blank">国土数値情報(${title})</a>`;

const JapanExtent = transformExtent(
  [120, 20, 154, 46],
  "EPSG:4326",
  "EPSG:3857"
);

export const lakes = new VectorLayer({
  source: new VectorSource({
    url: Lakes,
    format: new TopoFormat(),
    attributions: [ksjAttribution("湖沼")],
  }),
  style: new Style({
    fill: new Fill({
      color: "rgba(171, 214, 218, 0.8)",
    }),
    stroke: undefined,
  }),
  maxResolution: 2446,
  extent: JapanExtent,
});
