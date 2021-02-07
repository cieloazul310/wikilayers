import * as React from 'react';
import VectorLayer from 'ol/layer/Vector';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import { AppState, Action } from '../utils/AppState';

export function singleclick(appState: AppState, dispatch: React.Dispatch<Action>): (event: MapBrowserEvent) => void {
  const { features, page } = appState;
  return (event: MapBrowserEvent) => {
    const { map } = event;
    const feature = map.forEachFeatureAtPixel(event.pixel, (eventFeature) => eventFeature, {
      hitTolerance: 10,
      layerFilter: (layer) => layer instanceof VectorLayer,
    });
    if (feature) {
      const pageid: number = feature.get('pageid');
      const item = features[features.map((ftr) => ftr.page.pageid).indexOf(pageid)];

      if (item) dispatch({ type: 'SET_PAGE', page: item.page });
    } else if (page !== null) {
      dispatch({ type: 'SET_PAGE', page: null });
    }
  };
}

export function pointermove(event: MapBrowserEvent): void {
  const { map } = event;
  const pixel = map.getEventPixel(event.originalEvent);
  const hit = map.hasFeatureAtPixel(pixel, { layerFilter: (layer) => layer instanceof VectorLayer, hitTolerance: 10 });
  const target = map.getTarget();
  if (target && typeof target !== 'string') target.style.cursor = hit ? 'pointer' : '';
}
