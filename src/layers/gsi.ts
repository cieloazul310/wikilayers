import Tile from 'ol/layer/Tile';
import Group from 'ol/layer/Group';
import XYZ from 'ol/source/XYZ';
import { waterarea } from './ksj';
import { transformExtent } from 'ol/proj';

const gsiAttribution = '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>';

const JapanExtent = transformExtent([120, 20, 154, 46], 'EPSG:4326', 'EPSG:3857');

export const cjstd = new Tile({
  source: new XYZ({
    url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
    attributions: [gsiAttribution],
    maxZoom: 18,
    minZoom: 2,
  }),
});

export const relief = new Tile({
  source: new XYZ({
    url: 'https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png',
    attributions: [gsiAttribution],
    maxZoom: 15,
    minZoom: 5,
  }),
  extent: JapanExtent,
});

export const seamless = new Tile({
  source: new XYZ({
    url: "//cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg",
    attributions: [gsiAttribution],
    maxZoom: 18,
    minZoom: 2,
  }),
});

export const specialRelief = new Group({
  layers: [
    new Tile({
      source: new XYZ({
        url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
        maxZoom: 18,
        minZoom: 2,
      }),
      maxResolution: 4.77,
    }),
    new Tile({
      source: new XYZ({
        url: 'https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png',
        maxZoom: 15,
        minZoom: 5,
        transition: 0,
      }),
      extent: JapanExtent,
      opacity: 0.7,
    }),
    new Tile({
      className: 'multiply',
      source: new XYZ({
        url: 'https://cyberjapandata.gsi.go.jp/xyz/slopemap/{z}/{x}/{y}.png',
        attributions: [gsiAttribution],
        maxZoom: 15,
        minZoom: 3,
      }),
      extent: JapanExtent,
    }),
    waterarea,
  ],
});

/*
specialRelief
  .getLayers()
  .item(2)
  .on('prerender', (evt) => {
    evt.context.globalCompositeOperation = 'multiply';
  });

specialRelief
  .getLayers()
  .item(2)
  .on('postrender', (evt) => {
    evt.context.globalCompositeOperation = 'source-over';
  });
*/
