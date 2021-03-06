import { FeatureLike } from 'ol/Feature';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { PaletteType } from '@material-ui/core';
import labelStyle from './label';
import roadStyle from './road';
import railwayStyle from './railway';
import boundaryStyle from './boundary';
import transpStyle from './transp';
import { layerNames } from '../vt';

export default function vtStyle(paletteType: PaletteType) {
  return (feature: FeatureLike, resolution: number): Style | Style[] => {
    const properties = feature.getProperties();
    const { layer } = properties;
    if (!layerNames.includes(layer)) return new Style();
    if (layer === 'waterarea')
      return new Style({
        fill: new Fill({
          color: paletteType === 'light' ? '#acf' : '#346',
        }),
        zIndex: 0,
      });
    if (layer === 'coastline')
      return new Style({
        stroke: new Stroke({
          width: 2,
          color: paletteType === 'light' ? '#acf' : '#346',
        }),
        zIndex: 0,
      });
    if (layer === 'road') return roadStyle(feature, resolution, paletteType);
    if (layer === 'railway') return railwayStyle(feature, resolution, paletteType);
    if (layer === 'label') return labelStyle(feature, resolution, paletteType);
    if (layer === 'boundary') return boundaryStyle(feature, resolution, paletteType);
    if (layer === 'transp') return transpStyle(feature, resolution, paletteType);
    if (layer === 'contour')
      return new Style({
        stroke: new Stroke({
          color: paletteType === 'light' ? '#edd' : '#433',
        }),
        zIndex: 1,
      });
    if (layer === 'building')
      return new Style({
        fill: new Fill({
          color: paletteType === 'light' ? '#ddc' : '#444',
        }),
        zIndex: 4,
      });
    return new Style();
  };
}
