import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import RenderFeature from 'ol/render/Feature';
import { PaletteType } from '@material-ui/core';

export function roadStyle(feature: RenderFeature, resolution: number, paletteType: PaletteType = 'light') {
  const color = roadColor(feature, resolution, paletteType);
  const width = roadWidth(feature, resolution);
  const { lvOrder } = feature.getProperties();
  return new Style({
    stroke: new Stroke({
      width,
      color,
    }),
    zIndex: lvOrder ?? 2,
  });
}

// motorway: 0 高速道路以外, 1 高速道路, 9 不明
// rdCtg: 0 国道, 1 都道府県道, 2 市区町村道, 3 高速自動車国道等, 5 その他, 6 不明
function roadColor(feature: RenderFeature, resolution: number, paletteType: PaletteType = 'light') {
  const { rdCtg, motorway, ftCode } = feature.getProperties();
  return motorway === 1 || ftCode === 52703 || ftCode === 52704
    ? paletteType === 'light'
      ? '#3a3'
      : '#575'
    : rdCtg === 3
    ? paletteType === 'light'
      ? '#3a3'
      : '#575'
    : rdCtg === 0 || ftCode === 52701 || ftCode === 52702
    ? paletteType === 'light'
      ? '#fa7'
      : '#753'
    : rdCtg === 1
    ? paletteType === 'light'
      ? '#cc9'
      : '#663'
    : rdCtg === 2
    ? paletteType === 'light'
      ? '#ccc'
      : '#555'
    : paletteType === 'light'
    ? '#eee'
    : '#444';
}

// rnkWidth: 0: 3m未満, 1: 3m以上5.5m未満, 2: 5.5m以上13m未満
// 3: 13m以上19.5m未満, 4: 19.5m以上 5: その他, 6: 不明
function roadWidth(feature: RenderFeature, resolution: number) {
  const { rnkWidth, rdCtg } = feature.getProperties();
  if (rnkWidth === undefined) return rdCtg === 0 || rdCtg === 2 ? 2 : 1;
  return rnkWidth === 4 ? 3 : rnkWidth === 3 || rnkWidth === 2 ? 2 : rnkWidth === 1 ? 1 : 0.5;
}
