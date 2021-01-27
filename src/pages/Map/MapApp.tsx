import * as React from 'react';

import OlMap from 'ol/Map';
import View, { ViewOptions } from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Group from 'ol/layer/Group';
import Geolocation from 'ol/Geolocation';
import { fromLonLat } from 'ol/proj';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import '../../map/ol.css';

import { specialRelief } from '../../layers/gsi';
//import { initialBaseLayers } from '../../map/initialBaseLayers';
import { vectorStyle, allLabelStyle } from '../../map/vectorStyle';
import customControl from '../../map/customControl';
import { createOlFeature } from '../../map/createFeature';
import createVectorEvent from '../../map/createVectorEvent';
import setGeolocation from '../../map/setGeolocation';

/*
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
  visibleBaseLayer: PropTypes.string.isRequired,
  mapConfigure: PropTypes.shape({
    geolocation: PropTypes.object,
    showLabels: PropTypes.bool,
  }),
  mapView: PropTypes.object.isRequired,
  updateMapView: PropTypes.func.isRequired,
  selectFeature: PropTypes.func.isRequired,
  clearSelectedFeature: PropTypes.func.isRequired,
 */

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
  layers: [specialRelief, vectorLayer],
});

interface Props {
  features: [];
  visibleBaseLayer: string;
  mapConfigure: any;
  mapView: ViewOptions;
  updateMapView: any;
  selectFeature: any;
  clearSelectedFeature: any;
}

function MapApp(props?: Partial<Props>) {
  const classes = useStyles();
  const mapRef = React.useRef(null);
  
  React.useEffect(() => {
    map.setTarget('map');
    return () => map.setTarget(undefined);
  });
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
