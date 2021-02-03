import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useMap } from '../../utils/MapContext';

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
    multiply: {
      mixBlendMode: 'multiply',
    },
  })
);

function MapApp() {
  const classes = useStyles();
  const map = useMap();
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    map.setTarget(document.getElementById('map'));
    return () => map.setTarget(null);
  });

  /*
  const appState = useAppState();
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const mapRef = React.useRef(null);

  const vectorLayer = new VectorLayer({
    source: new VectorSource({
      attributions: ['<a href="https://ja.wikipedia.org" target="_blank">Wikipedia</a>'],
    }),
    style: vectorStyle,
  });

  const map = new OlMap({
    layers: [baseLayerGroup, vectorLayer],
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

  React.useEffect(() => {
    const view = JSON.parse(window.localStorage.getItem('wikilayers:view'));

    map.setView(
      new View({
        zoom: view?.zoom ?? 6,
        center: view?.center ?? fromLonLat([140.4, 36.4]),
        constrainRotation: 4,
      })
    );

    setGeolocation(map, geolocation);
    createVectorEvent(map, appState, dispatch);

    vectorLayer.getSource().addFeatures(appState.features.map((feature) => pageToFeature(feature)));

    vtLayer.setStyle(vtStyle(palette.type));
    setVisibleBaseLayer(appState.baseLayer);

    map.setTarget(document.getElementById('map'));

    return () => map.setTarget(null);
  });

  React.useEffect(() => {
    vectorLayer.getSource().forEachFeature((feature) => {
      feature.setProperties({
        selected: feature.get('pageTitle') === appState.page?.title,
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

  React.useEffect(() => {
    setVisibleBaseLayer(appState.baseLayer);
  }, [appState.baseLayer]);

  map.on('moveend', (event) => {
    const view = event.map.getView();
    window.localStorage.setItem('wikilayers:view', JSON.stringify({ zoom: view.getZoom(), center: view.getCenter() }));
  });
  */
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
    <div className={classes.mapContainer} ref={mapRef}>
      <div className={classes.map} id="map" />
    </div>
  );
}

export default MapApp;
