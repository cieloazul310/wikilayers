import RenderFeature from 'ol/render/Feature';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { PaletteType } from '@material-ui/core';
import { labelStyle } from './label';
import { roadStyle } from './road';
import { railwayStyle } from './railway';
import { layerNames } from '../vt';

export function vtStyle(paletteType: PaletteType) {
  return (feature: RenderFeature, resolution: number) => {
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
          color: paletteType === 'light' ? '#ddd' : '#444',
        }),
        zIndex: 4,
      });
  };
}
