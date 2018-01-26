import Feature from 'ol/feature';
import Style from 'ol/style/style';
import Fill from 'ol/style/fill';
import Stroke from 'ol/style/stroke';
import IconStyle from 'ol/style/icon';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import GeomPoint from 'ol/geom/point';

import Icon from '../img/geolocation.svg';

function setGeolocation(map, geolocation) {

  const positionFeature = new Feature({
    geometry: geolocation.get('cachedPosition') ? new GeomPoint(geolocation.get('cachedPosition')) : null
  });
  positionFeature.setStyle(new Style({
    image: new IconStyle({
      src: Icon
    })
  }));

  const accuracyFeature = new Feature();
  accuracyFeature.setStyle(
    new Style({
      fill: new Fill({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      stroke: new Stroke({
        color: 'rgba(2, 119, 189, 0.6)',
        width: 2
      })
    })
  );
  geolocation.on('change:accuracyGeometry', () => {
    accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
  });

  geolocation.on('change:position', () => {
    const coordinates = geolocation.getPosition();

    positionFeature.setGeometry(coordinates ?
      new GeomPoint(coordinates) : null
    );
  });

  new VectorLayer({
    map: map,
    title: 'geolocation layer',
    source: new VectorSource({
      features: [accuracyFeature, positionFeature]
    })
  });
}

export default setGeolocation;
