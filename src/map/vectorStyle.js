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
  const styleArr = [
    new Style({
      image: new IconStyle({
        anchor: [0.5, 24],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: feature.get('selected') ? selectedPlace : Place
      })
    })
  ];
  if (resolution < 610) {
    styleArr.push(new Style({
      text: new TextStyle({
        text: feature.get('name'),
        font: '14px sans-serif',
        offsetY: 8,
        fill: new Fill({
          color: 'white'
        }),
        stroke: new Stroke({
          color: feature.get('selected') ? commonStyles.pallete.primary1Color : '#333',
          width: 4
        })
      })
    }));
  }
  return styleArr;
};

export default vectorStyle;
