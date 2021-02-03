import * as React from 'react';
import OlMap from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import { AppState, Action } from '../utils/AppState';

export function createVectorEvent(map: OlMap, { features, page }: AppState, dispatch: React.Dispatch<Action>) {
  
  function singleclick(event: MapBrowserEvent) {
    console.log('singleclick');
    event.preventDefault();
    const feature = map.forEachFeatureAtPixel(event.pixel, (feature) => feature, {
      hitTolerance: 10,
      layerFilter: (layer) => layer instanceof VectorLayer,
    });
    if (feature) {
      const pageid: number = feature.get('pageid');
      const item = features[features.map(({ page }) => page.pageid).indexOf(pageid)];

      if (item) dispatch({ type: 'SET_PAGE', page: item.page });
    } else {
      dispatch({ type: 'SET_PAGE', page: null });
    }
  }
  
  map.un('singleclick', singleclick);
  map.on('singleclick', singleclick);

  function pointerMove(event: MapBrowserEvent) {
    event.preventDefault();
    const pixel = map.getEventPixel(event.originalEvent);
    const hit = map.hasFeatureAtPixel(pixel, { layerFilter: (layer) => layer instanceof VectorLayer, hitTolerance: 10 });
    const target = map.getTarget();
    if (typeof target !== 'string') target.style.cursor = hit ? 'pointer' : '';
  }

  map.un('pointermove', pointerMove);
  map.on('pointermove', pointerMove);
}
