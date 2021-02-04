import * as React from 'react';
import OlMap from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import { AppState, Action } from '../utils/AppState';

export default function createVectorEvent(map: OlMap, { features }: AppState, dispatch: React.Dispatch<Action>): void {
  function singleclick(event: MapBrowserEvent) {
    event.preventDefault();
    const feature = map.forEachFeatureAtPixel(event.pixel, (eventFeature) => eventFeature, {
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
    if (target && typeof target !== 'string') target.style.cursor = hit ? 'pointer' : '';
  }

  map.un('pointermove', pointerMove);
  map.on('pointermove', pointerMove);
}
