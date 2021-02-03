import * as React from 'react';
import OlMap from 'ol/Map';

export const MapContext = React.createContext<OlMap>(null);

export function useMap() {
  const map = React.useContext(MapContext);
  return map;
}
