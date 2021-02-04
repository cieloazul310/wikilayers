import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import TopoFormat from 'ol/format/topojson';
import Style from 'ol/style/style';
import Fill from 'ol/style/fill';
import Attribution from 'ol/attribution';
import Proj from 'ol/proj';
import Lakes from '../data/lakes.topojson';

const ksjAttribution = (title) => {
  return new Attribution({
    html: `<a href="http://nlftp.mlit.go.jp/ksj/" target="_blank">国土数値情報(${title})</a>`
  })
};

const JapanExtent = Proj.transformExtent([120, 20, 154, 46], 'EPSG:4326', 'EPSG:3857');

export const lakes = new VectorLayer({
      source: new VectorSource({
        url: Lakes,
        format: new TopoFormat(),
        attributions: [ksjAttribution('湖沼')]
      }),
      style: new Style({
        fill: new Fill({
          color: 'rgba(171, 214, 218, 0.8)'
        }),
        stroke: undefined
      }),
      maxResolution: 2446,
      extent: JapanExtent
    });
