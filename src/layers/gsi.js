import Tile from 'ol/layer/tile';
import Group from 'ol/layer/group';
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
  title: '地理院地図',
  summary: '国土地理院が配信している標準地図'
});

export const cjpale = new Tile({
  source: new XYZ({
    url: '//cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
    attributions: [gsiAttribution]
  }),
  title: '地理院地図(淡色)',
  summary: '国土地理院が配信している淡色地図'
});

export const seamless = new Tile({
  source: new XYZ({
    url: '//cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
    attributions: [gsiAttribution]
  }),
  title: '写真',
  summary: '国土地理院が配信している航空写真および衛星写真'
});

export const relief = new Tile({
  source: new XYZ({
    url: '//cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png',
    attributions: [gsiAttribution]
  }),
  title: '色別標高図',
  summary: '標高別に彩色した地図に陰影を加えた地図'
});

export const hillshade = new Tile({
  source: new XYZ({
    url: '//cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png',
    attributions: [gsiAttribution]
  }),
  title: '陰影起伏図',
  summary: '地形の起伏を陰影で表現した地図'
});

export const slope = new Tile({
  source: new XYZ({
    url: '//cyberjapandata.gsi.go.jp/xyz/slopemap/{z}/{x}/{y}.png',
    attributions: [gsiAttribution]
  }),
  title: '傾斜量図',
  summary: '地形の傾斜量を濃淡で表現した地図'
});

export const specialRelief = new Group({
  layers: [
    new Tile({
      source: new XYZ({
        url: '//cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png'
      }),
      opacity: 0.7
    }),
    new Tile({
      source: new XYZ({
        url: '//cyberjapandata.gsi.go.jp/xyz/slopemap/{z}/{x}/{y}.png',
        attributions: [gsiAttribution]
      })
    })
  ],
  title: '地形スペシャル',
  summary: '色別標高図に傾斜量図を乗算合成した地図'
});
