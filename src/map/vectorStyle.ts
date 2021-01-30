import Style from 'ol/style/Style';
import IconStyle from 'ol/style/Icon';
import TextStyle from 'ol/style/Text';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Feature from 'ol/Feature';
import Place from '../img/place.svg';
import selectedPlace from '../img/selectedPlace.svg';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';

export function vectorStyle(feature: Feature, resolution: number) {
  if (!feature.get('visibility')) return new Style();
  const isSelected = feature.get('selected');
  const styleArr = [
    new Style({
      zIndex: isSelected ? 10 : 1,
      image: new IconStyle({
        anchor: [0.5, 24],
        anchorXUnits: IconAnchorUnits['FRACTION'],
        anchorYUnits: IconAnchorUnits['PIXELS'],
        src: isSelected ? selectedPlace : Place,
      }),
    }),
  ];
  const label = new Style({
    zIndex: isSelected ? 10 : 1,
    text: new TextStyle({
      text: feature.get('title'),
      font: `bold 12px sans-serif`,
      offsetY: 8,
      fill: new Fill({
        color: 'white'
      }),
      stroke: new Stroke({
        color: '#333',
        width: 3
      })
    })
  });

  if (resolution < 610 && !isSelected) {
    styleArr.push(label);
  } else if (resolution > 610 && isSelected) {
    styleArr.push(label);
  }
  return styleArr;
};

export function allLabelStyle(feature: Feature) {
  if (!feature.get('visibility')) return new Style();
  const isSelected = feature.get('selected');
  return [
    new Style({
      zIndex: isSelected ? 10 : 1,
      image: new IconStyle({
        anchor: [0.5, 24],
        anchorXUnits: IconAnchorUnits['FRACTION'],
        anchorYUnits: IconAnchorUnits['PIXELS'],
        src: isSelected ? selectedPlace : Place,
      }),
    }),
    new Style({
      zIndex: isSelected ? 10 : 1,
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
};
