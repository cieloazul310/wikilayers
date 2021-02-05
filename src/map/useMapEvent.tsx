import * as React from 'react';
import OlMap from 'ol/Map';
import MapBrowserEvent from 'ol/MapBrowserEvent';

function useMapEvent(map: OlMap, eventType: string | string[], listener: (evt: MapBrowserEvent) => void): void {
  React.useEffect(() => {
    map.on(eventType, listener);
    return () => map.un(eventType, listener);
  }, [map, eventType, listener]);
}

export default useMapEvent;
