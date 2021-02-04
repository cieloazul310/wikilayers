import Style from 'ol/style/Style';
import IconStyle from 'ol/style/Icon';
import TextStyle from 'ol/style/Text';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import Place from '../img/place.svg';
import selectedPlace from '../img/selectedPlace.svg';

export function vectorStyle(feature: FeatureLike, resolution: number): Style | Style[] {
  if (!feature.get('visibility')) return new Style();
  const isSelected = feature.get('selected');
  const styleArr = [
    new Style({
      zIndex: isSelected ? 110 : 101,
      image: new IconStyle({
        anchor: [0.5, 24],
        anchorXUnits: IconAnchorUnits.FRACTION,
        anchorYUnits: IconAnchorUnits.PIXELS,
        src: isSelected ? selectedPlace : Place,
      }),
    }),
  ];
  const label = new Style({
    zIndex: isSelected ? 110 : 101,
    text: new TextStyle({
      text: feature.get('title'),
      font: `bold 12px sans-serif`,
      offsetY: 8,
      fill: new Fill({
        color: 'white',
      }),
      stroke: new Stroke({
        color: '#333',
        width: 3,
      }),
    }),
  });

  if (resolution < 610 && !isSelected) {
    styleArr.push(label);
  } else if (resolution > 610 && isSelected) {
    styleArr.push(label);
  }
  return styleArr;
}

export function allLabelStyle(feature: FeatureLike): Style | Style[] {
  if (!feature.get('visibility')) return new Style();
  const isSelected = feature.get('selected');
  return [
    new Style({
      zIndex: isSelected ? 110 : 101,
      image: new IconStyle({
        anchor: [0.5, 24],
        anchorXUnits: IconAnchorUnits.FRACTION,
        anchorYUnits: IconAnchorUnits.PIXELS,
        src: isSelected ? selectedPlace : Place,
      }),
    }),
    new Style({
      zIndex: isSelected ? 110 : 101,
      text: new TextStyle({
        text: feature.get('title'),
        font: `bold 12px sans-serif`,
        offsetY: 8,
        fill: new Fill({
          color: 'white',
        }),
        stroke: new Stroke({
          color: isSelected ? 'blue' : '#333',
          width: 3,
        }),
      }),
    }),
  ];
}
