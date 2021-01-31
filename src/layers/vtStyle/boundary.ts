import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import RenderFeature from 'ol/render/Feature';
import { PaletteType } from '@material-ui/core';

export function boundaryStyle(feature: RenderFeature, resolution: number, paletteType: PaletteType) {
  return new Style({
    stroke: new Stroke({
      color: paletteType === 'light' ? '#aaa' : '#777',
      width: 2,
      lineDash: [2, 6],
    }),
  });
}
