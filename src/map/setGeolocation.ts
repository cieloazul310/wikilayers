import OlMap from 'ol/Map';
import Feature from 'ol/Feature';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import IconStyle from 'ol/style/Icon';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeomPoint from 'ol/geom/Point';
import Geolocation from 'ol/Geolocation';

import Icon from '../img/geolocation.svg';

function setGeolocation(map: OlMap, geolocation: Geolocation): void {
  const positionFeature = new Feature({
    geometry: geolocation.get('cachedPosition') ? new GeomPoint(geolocation.get('cachedPosition')) : null,
  });
  positionFeature.setStyle(
    new Style({
      image: new IconStyle({
        src: Icon,
      }),
    })
  );

  const accuracyFeature = new Feature();
  accuracyFeature.setStyle(
    new Style({
      fill: new Fill({
        color: 'rgba(255, 255, 255, 0.2)',
      }),
      stroke: new Stroke({
        color: 'rgba(2, 119, 189, 0.6)',
        width: 2,
      }),
    })
  );
  geolocation.on('change:accuracyGeometry', () => {
    accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
  });

  geolocation.on('change:position', () => {
    const coordinates = geolocation.getPosition();
    if (coordinates) {
      positionFeature.setGeometry(new GeomPoint(coordinates));
    }
  });

  const geoLocationLayer = new VectorLayer({
    map,
    source: new VectorSource({
      features: [accuracyFeature, positionFeature],
    }),
  });

  geolocation.on('change:tracking', () => {
    geoLocationLayer.setVisible(geolocation.getTracking());
  });
}

export default setGeolocation;
