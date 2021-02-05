import * as React from 'react';
import OlMap from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Geolocation from 'ol/Geolocation';
import { Attribution, defaults as defaultControl } from 'ol/control';
import { fromLonLat } from 'ol/proj';
import { useTheme } from '@material-ui/core/styles';

import { baseLayerGroup, setVisibleBaseLayer } from './layers/baseLayers';
import { vtLayer } from './layers/vt';
import vtStyle from './layers/vtStyle';
import { vectorStyle, allLabelStyle } from './map/vectorStyle';
import setGeolocation from './map/setGeolocation';
import { singleclick, pointermove } from './map/createVectorEvent';
import useMapEvent from './map/useMapEvent';
import { pageToOlFeature } from './utils/helpers';
import { MapContext } from './utils/MapContext';
import { useAppState, useDispatch } from './utils/AppStateContext';

import './map/ol.css';
import './map/blend.css';

interface Props {
  children: React.ReactNode;
}

const storaged = window.localStorage.getItem('wikilayers:view');
const initialView = storaged ? JSON.parse(storaged) : null;

const vectorLayer = new VectorLayer({
  source: new VectorSource({
    attributions: ['<a href="https://ja.wikipedia.org" target="_blank">Wikipedia</a>'],
  }),
});

const map = new OlMap({
  view: new View({
    zoom: initialView?.zoom ?? 6,
    center: initialView?.center ?? fromLonLat([140.4, 36.4]),
    constrainRotation: 4,
  }),
  layers: [baseLayerGroup, vectorLayer],
  controls: defaultControl({
    attribution: false,
  }).extend([
    new Attribution({
      collapsible: false,
    }),
  ]),
});

map.on('moveend', (event) => {
  const view = event.map.getView();
  window.localStorage.setItem('wikilayers:view', JSON.stringify({ zoom: view.getZoom(), center: view.getCenter() }));
});
map.on('pointermove', pointermove);

const geolocation = new Geolocation({
  tracking: false,
  trackingOptions: {
    enableHighAccuracy: true,
  },
  projection: map.getView().getProjection(),
});

setGeolocation(map, geolocation);

function MapProvider({ children }: Props): JSX.Element {
  const appState = useAppState();
  const dispatch = useDispatch();
  const { palette } = useTheme();

  useMapEvent(map, 'singleclick', singleclick(appState, dispatch));

  React.useEffect(() => {
    setVisibleBaseLayer(appState.baseLayer);
  }, [appState.baseLayer]);
  React.useEffect(() => {
    geolocation.setTracking(appState.geolocation);
  }, [appState.geolocation]);
  React.useEffect(() => {
    vtLayer.setStyle(vtStyle(palette.type));
  }, [palette.type]);
  React.useEffect(() => {
    vectorLayer.getSource().clear();
    vectorLayer.getSource().addFeatures(appState.features.map((feature) => pageToOlFeature(feature)));
  }, [appState.features]);
  React.useEffect(() => {
    vectorLayer.getSource().forEachFeature((feature) => {
      feature.setProperties({
        selected: feature.get('pageTitle') === appState.page?.title,
      });
    });
  }, [appState.page, appState.features]);
  React.useEffect(() => {
    vectorLayer.setStyle(appState.alwaysShowLabels ? allLabelStyle : vectorStyle);
  }, [appState.alwaysShowLabels]);

  return <MapContext.Provider value={map}>{children}</MapContext.Provider>;
}

export default MapProvider;
