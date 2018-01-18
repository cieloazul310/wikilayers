import Tile from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';
import Attribution from 'ol/attribution';

const gsiAttribution = new Attribution({
  html: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
});

export const cjstd = new Tile({
  source: new XYZ({
    url: '//cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
    attributions: [gsiAttribution]
  }),
  title: '地理院地図'
});

export const cjpale = new Tile({
  source: new XYZ({
    url: '//cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
    attributions: [gsiAttribution]
  }),
  title: '地理院地図(淡色)'
});

export const seamless = new Tile({
  source: new XYZ({
    url: '//cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
    attributions: [gsiAttribution]
  }),
  title: '写真'
});

export const relief = new Tile({
  source: new XYZ({
    url: '//cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png',
    attributions: [gsiAttribution]
  }),
  title: '色別標高図'
});

export const hillshade = new Tile({
  source: new XYZ({
    url: '//cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png',
    attributions: [gsiAttribution]
  }),
  title: '陰影起伏図'
});

export const slope = new Tile({
  source: new XYZ({
    url: '//cyberjapandata.gsi.go.jp/xyz/slopemap/{z}/{x}/{y}.png',
    attributions: [gsiAttribution]
  }),
  title: '傾斜量図'
});
