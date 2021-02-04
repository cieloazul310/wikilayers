import { FeatureLike } from 'ol/Feature';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { PaletteType } from '@material-ui/core';

const res15 = 4.78;
const res17 = 1.19;

// motorway: 0 高速道路以外, 1 高速道路, 9 不明
// rdCtg: 0 国道, 1 都道府県道, 2 市区町村道, 3 高速自動車国道等, 5 その他, 6 不明
function roadColor(feature: FeatureLike, resolution: number, paletteType: PaletteType = 'light') {
  const { rdCtg, motorway, ftCode } = feature.getProperties();
  if (motorway === 1 || ftCode === 52703 || ftCode === 52704) return paletteType === 'light' ? '#3a3' : '#575';
  if (rdCtg === 3) return paletteType === 'light' ? '#3a3' : '#575';
  if (rdCtg === 0 || ftCode === 52701 || ftCode === 52702) return paletteType === 'light' ? '#fb9' : '#753';
  if (rdCtg === 1) return paletteType === 'light' ? '#cc9' : '#663';
  if (rdCtg === 2) return paletteType === 'light' ? '#ccc' : '#555';

  return paletteType === 'light' ? '#ddd' : '#444';
}

// rnkWidth: 0: 3m未満, 1: 3m以上5.5m未満, 2: 5.5m以上13m未満
// 3: 13m以上19.5m未満, 4: 19.5m以上 5: その他, 6: 不明
function defaultRoadWidth(feature: FeatureLike) {
  const { rnkWidth, rdCtg } = feature.getProperties();
  if (rnkWidth === undefined) return rdCtg === 0 || rdCtg === 2 ? 2 : 1;
  if (rnkWidth === 4) return 3;
  if (rnkWidth === 3 || rnkWidth === 2) return 2;
  return rnkWidth === 1 ? 1 : 0.5;
}

function roadWidth(feature: FeatureLike, resolution: number) {
  const width = defaultRoadWidth(feature);
  return resolution > res17 ? width * Math.max(res15 / resolution, 1) : 2;
}

export default function roadStyle(feature: FeatureLike, resolution: number, paletteType: PaletteType = 'light'): Style {
  const color = roadColor(feature, resolution, paletteType);
  const width = roadWidth(feature, resolution);
  const { lvOrder, rdCtg } = feature.getProperties();

  if (resolution < res17 && rdCtg !== undefined) return new Style();
  return new Style({
    stroke: new Stroke({
      width,
      color,
    }),
    zIndex: lvOrder ?? 2,
  });
}
