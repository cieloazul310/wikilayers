import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";

export const osm = new Tile({
  source: new OSM({
    attributions: [
      '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
    ],
  }),
});
