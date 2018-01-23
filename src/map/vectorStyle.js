import Style from 'ol/style/style';
import IconStyle from 'ol/style/icon';
import TextStyle from 'ol/style/text';
import Fill from 'ol/style/fill';
import Stroke from 'ol/style/stroke';
import Place from '../img/place.svg';
import selectedPlace from '../img/selectedPlace.svg';

import commonStyles from '../commonStyles';

function vectorStyle(feature, resolution) {
  if (!feature.get('visibility')) return new Style();
  const isSelected = feature.get('selected');
  const styleArr = [
    new Style({
      zIndex: isSelected ? 10 : 1,
      image: new IconStyle({
        anchor: [0.5, 24],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: isSelected ? selectedPlace : Place
      })
    })
  ];
  const label = new Style({
    zIndex: isSelected ? 10 : 1,
    text: new TextStyle({
      text: feature.get('name'),
      font: `12px ${commonStyles.fontFamily}`,
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

function allLabelStyle(feature) {
  if (!feature.get('visibility')) return new Style();
  const isSelected = feature.get('selected');
  return [
    new Style({
      zIndex: isSelected ? 10 : 1,
      image: new IconStyle({
        anchor: [0.5, 24],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: isSelected ? selectedPlace : Place
      })
    }),
    new Style({
      zIndex: isSelected ? 10 : 1,
      text: new TextStyle({
        text: feature.get('name'),
        font: `12px ${commonStyles.fontFamily}`,
        offsetY: 8,
        fill: new Fill({
          color: 'white'
        }),
        stroke: new Stroke({
          color: isSelected ? commonStyles.pallete.primary1Color : '#333',
          width: 3
        })
      })
    })
  ];
};

export { vectorStyle, allLabelStyle };
