import Style from 'ol/style/style';
import IconStyle from 'ol/style/icon';
import TextStyle from 'ol/style/text';
import Fill from 'ol/style/fill';
import Stroke from 'ol/style/stroke';

function vectorStyle(feature, resolution) {
  return feature.get('visibility') ? (
    [
      new Style({
        image: new IconStyle({
          anchor: [0.5, 24],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: './place.svg'
        })
      }),
      new Style({
        text: new TextStyle({
          text: feature.get('name'),
          offsetY: 4,
          fill: new Fill({
            color: 'white'
          }),
          stroke: new Stroke({
            color: '#333',
            width: 2
          })
        })
      })
    ]
  ) : (
    new Style()
  );
};

export default vectorStyle;
