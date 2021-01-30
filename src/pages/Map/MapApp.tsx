import * as React from 'react';

import OlMap from 'ol/Map';
import View, { ViewOptions } from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Group from 'ol/layer/Group';
import Geolocation from 'ol/Geolocation';
import Feature from 'ol/Feature';
import { fromLonLat } from 'ol/proj';
import { Attribution, ScaleLine, defaults as defaultControl } from 'ol/control';

import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import '../../map/ol.css';

//import { specialRelief } from '../../layers/gsi';
import { vtLayer } from '../../layers/vt';
import { vtStyle } from '../../layers/vtStyle';
//import { initialBaseLayers } from '../../map/initialBaseLayers';
import { vectorStyle, allLabelStyle } from '../../map/vectorStyle';
//import customControl from '../../map/customControl';
//import { createOlFeature } from '../../map/createFeature';
import createVectorEvent from '../../map/createVectorEvent';
import setGeolocation from '../../map/setGeolocation';

import { useAppState, useDispatch } from '../../utils/AppStateContext';
import { pageToFeature } from '../../utils/pageToFeature';

const useStyles = makeStyles((theme) =>
  createStyles({
    mapContainer: {
      display: 'flex',
      flexGrow: 1,
    },
    map: {
      display: 'flex',
      flexGrow: 1,
    },
  })
);

const vectorLayer = new VectorLayer({
  source: new VectorSource({
    attributions: ['<a href="https://ja.wikipedia.org" target="_blank">Wikipedia</a>'],
  }),
  style: vectorStyle,
});

const map = new OlMap({
  view: new View({
    zoom: 10,
    center: fromLonLat([140.4, 36.4]),
  }),
  layers: [vtLayer, vectorLayer],
  controls: defaultControl({
    attribution: false,
  }).extend([
    new Attribution({
      collapsible: false,
    }),
  ]),
});

const geolocation = new Geolocation({
  tracking: false,
  projection: map.getView().getProjection(),
});

setGeolocation(map, geolocation);

function MapApp() {
  const classes = useStyles();
  const appState = useAppState();
  const { palette } = useTheme();
  const mapRef = React.useRef(null);
  
  React.useEffect(() => {
    vtLayer.setStyle(vtStyle(palette.type));
    map.setTarget('map');
    return () => map.setTarget(undefined);
  });

  React.useEffect(() => {
    vectorLayer.getSource().forEachFeature((feature) => {
      console.log(feature.get('title'));
      feature.setProperties({
        selected: feature.get('title') === appState.page?.title,
      });
    });
  }, [appState.page]);

  React.useEffect(() => {
    vectorLayer.getSource().clear();
    vectorLayer.getSource().addFeatures(appState.features.map((feature) => pageToFeature(feature)));  
  }, [appState.features]);

  React.useEffect(() => {
    geolocation.setTracking(appState.geolocation);
  }, [appState.geolocation]);

  React.useEffect(() => {
    vtLayer.setStyle(vtStyle(palette.type));
  }, [palette.type]);
  /*
  componentDidUpdate() {
    this.createMap();
    // TODO: this.updateMap();
    this.vector.getSource().forEachFeature((olFeature) => {
      olFeature.setProperties({
        selected: olFeature.getId() === this.props.selectedFeature.id,
      });
    });
  }

  componentWillUnmount() {
    if (this.map) {
      this.props.updateMapView(this.map.getView().getProperties());

      this.props.saveGeolocation({
        tracking: this.geolocation.getTracking(),
        cachedPosition:
          this.geolocation.getPosition() ||
          this.geolocation.get("cachedPosition"),
      });
    }
  }

  const _createMap = () => {
    if (this.map) return;

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: props.features.map((feature) =>
          createOlFeature(feature)
        ),
        attributions: [
          '<a href="https://ja.wikipedia.org" target="_blank">Wikipedia</a>',
        ],
      }),
      style: props.mapConfigure.showLabels ? allLabelStyle : vectorStyle,
      title: "features",
    });

    const baseLayers = initialBaseLayers();
    baseLayers.forEach((layer) => {
      layer.setVisible(layer.get("title") === props.visibleBaseLayer);
    });

    this.map = new OlMap({
      view: new View(this.props.mapView),
      layers: [
        new Group({
          layers: baseLayers,
        }),
        this.vector,
      ],
      controls: customControl,
      target: "map",
    });
    
    this.map.on('moveend', () => {
      this.props.updateMapView(this.map.getView().getProperties());
    });

    createVectorEvent(this.map, {
      selectFeature: this.props.selectFeature,
      clearSelectedFeature: this.props.clearSelectedFeature,
    });

    this.geolocation = new Geolocation({
      tracking: this.props.mapConfigure.geolocation.tracking,
      projection: this.map.getView().getProjection(),
    });

    this.geolocation.setProperties({
      cachedPosition: this.props.mapConfigure.geolocation.cachedPosition,
    });

    if (this.props.mapConfigure.geolocation.tracking) {
      setGeolocation(this.map, this.geolocation);
    }
  }
*/
  return (
    <div className={classes.mapContainer} ref={mapRef} >
      <div className={classes.map} id="map" />
    </div>
  );
}

export default MapApp;
