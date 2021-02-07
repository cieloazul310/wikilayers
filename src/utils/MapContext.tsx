import * as React from 'react';
import OlMap from 'ol/Map';

export const MapContext = React.createContext<OlMap>(new OlMap({}));

export function useMap(): OlMap {
  const map = React.useContext(MapContext);
  return map;
}
