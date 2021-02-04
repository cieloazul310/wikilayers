import { FeatureLike } from 'ol/Feature';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { PaletteType } from '@material-ui/core';

export default function boundaryStyle(feature: FeatureLike, resolution: number, paletteType: PaletteType): Style {
  return new Style({
    stroke: new Stroke({
      color: paletteType === 'light' ? '#aaa' : '#777',
      width: 2,
      lineDash: [2, 6],
    }),
  });
}
