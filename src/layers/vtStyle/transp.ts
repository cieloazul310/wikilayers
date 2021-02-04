import Style from 'ol/style/Style';
import { FeatureLike } from 'ol/Feature';
import Text from 'ol/style/Text';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import { PaletteType } from '@material-ui/core';

export default function transpStyle(feature: FeatureLike, resolution: number, paletteType: PaletteType): Style {
  const { ftCode, name } = feature.getProperties();
  if (ftCode === 2904) return new Style();
  // declutter: true
  if (ftCode === 2901) return new Style();
  // if (ftCode === 2941 || ftCode === 2942 || ftCode === 2945)
  return new Style({
    text: new Text({
      text: name,
      textBaseline: 'middle',
      textAlign: 'center',
      font: `${paletteType === 'light' ? 'bold' : 'normal'} x-small sans-serif`,
      stroke: new Stroke({
        color: '#575',
        width: 2,
      }),
      fill: new Fill({
        color: paletteType === 'light' ? '#fff' : '#eee',
      }),
    }),
    zIndex: 11,
  });
  /*
  if (nRNo === 0) return new Style();
  return [
    new Style({
      image: new RegularShape({
        points: 3,
        radius: 12,
        angle: Math.PI,
        fill: new Fill({
          color: paletteType === 'light' ? '#44f' : '#339',
        }),
      }),
      zIndex: 10,
    }),
    new Style({
      text: new Text({
        text: nRNo.toString(),
        textBaseline: 'middle',
        textAlign: 'center',
        font: `bold xx-small monospace`,
        stroke: new Stroke({
          color: paletteType === 'light' ? '#44f' : '#339',
          width: 2,
        }),
        fill: new Fill({
          color: '#fff',
        }),
      }),
      zIndex: 11,
    }),
  ];
  */
}

/** ftCode: number
 *  2901: 国道番号 nRNo
 *  2904: 高速道路番号 nRNo
 *  2941: インターチェンジ name
 *  2942: ジャンクション name
 *  2945: スマートインターチェンジ name
 */
