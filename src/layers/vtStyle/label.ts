import Style from 'ol/style/Style';
import Text, { Options as TextOptions } from 'ol/style/Text';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import RenderFeature from 'ol/render/Feature';
import { PaletteType } from '@material-ui/core';

// 110: 市区町村, 130: 郡, 140: 都道府県, 210: 公称(町字名), 220: 集落名称(通称)
const chimei = [110, 130, 140, 210, 220];
function chimeiTextStyle(feature: RenderFeature, resolution: number, paletteType: PaletteType = 'light'): TextOptions {
  const { annoCtg } = feature.getProperties();
  const fontSize = annoCtg === 110 || annoCtg === 130 || annoCtg === 140 ? 'large' : 'x-small';
  return {
    ...defaultTextStyle(paletteType),
    font: `${fontSize} sans-serif`,
  };
}

// 311, 1311, 2311: 山の総称, 312, 1312, 2312: 山、岳、峰等
// 333, 1333, 2333: 山脈、山地
const mountain = [311, 1311, 2311, 312, 1312, 2312, 333, 1333, 2333];
function mountainTextStyle(feature: RenderFeature, resolution: number, paletteType: PaletteType = 'light'): TextOptions {
  return {
    fill: new Fill({
      color: paletteType === 'light' ? '#755' : '#ecc',
    }),
    stroke: defaultStroke(paletteType),
  };
}

// 321, 1321, 2321: 湖、沼、池、浦等, 322, 1322, 2322: 河川、用水等
// 344, 1344, 2344: 海、灘, 湾、淵、浦、瀬、海峡、瀬戸等: 345, 1345, 2345
// 346: 半島, 347: 海岸、浜、洲、干潟, 343: 岬、鼻、崎、磯、敷等
// 351: 群島, 352: 島 431: 港湾 432: 港湾施設 521: ダム
const water = [321, 1321, 2321, 322, 1322, 2322, 344, 1344, 2344, 345, 1345, 2345, 346, 347, 343, 351, 1351, 2351, 352, 1352, 2352, 431, 1431, 2431, 432, 521];
function waterTextStyle(feature: RenderFeature, resolution: number, paletteType: PaletteType = 'light'): TextOptions {
  const { annoCtg } = feature.getProperties();
  const fontSize = annoCtg === 321 || annoCtg === 344 ? 'small' : 'x-small';

  return {
    fill: new Fill({
      color: paletteType === 'light' ? '#689' : '#cce',
    }),
    stroke: defaultStroke(paletteType),
    font: `${fontSize} sans-serif`
  };
}

// 422: 鉄道駅名
const station = [422];
function stationTextStyle(feature: RenderFeature, resolution: number, paletteType: PaletteType = 'light'): TextOptions {
  return {
    ...defaultTextStyle(paletteType),
    font: `${paletteType === 'light' ? 'bold' : 'normal'} x-small sans-serif`,
  };
};

export function labelStyle(feature: RenderFeature, resolution: number, paletteType: PaletteType = 'light') {
  const properties = feature.getProperties();

  if (![...chimei, ...mountain, ...water, ...station, 681].includes(properties?.annoCtg))
    return new Style();
  const { annoCtg } = properties;

  const textStyle = chimei.includes(annoCtg)
    ? chimeiTextStyle(feature, resolution, paletteType)
    : mountain.includes(annoCtg)
    ? mountainTextStyle(feature, resolution, paletteType)
    : water.includes(annoCtg)
    ? waterTextStyle(feature, resolution, paletteType)
    : station.includes(annoCtg)
    ? stationTextStyle(feature, resolution, paletteType)
    : defaultTextStyle(paletteType);
  const pos = textPos(properties);
  return new Style({
    text: new Text({
      ...textStyle,
      text: properties.knj,
      textAlign: pos[0],
      textBaseline: pos[1],
    }),
    zIndex: 10,
  });
}

function defaultFill(paletteType: PaletteType = 'light') {
  return new Fill({ color: paletteType === 'light' ? '#777' : '#eee' });
}
function defaultStroke(paletteType: PaletteType = 'light') {
  return new Stroke({ color: paletteType === 'light' ? '#fff' : '#777', width: 2 });
}

function defaultTextStyle(paletteType: PaletteType = 'light'): TextOptions {
  return {
    fill: defaultFill(paletteType),
    stroke: defaultStroke(paletteType),
  };
}

function textPos(properties: Record<string, string>): [CanvasTextAlign, CanvasTextBaseline] {
  if (!properties || !('dspPos' in properties)) return ['center', 'middle'];
  const { dspPos } = properties;
  const align = dspPos.slice(0, 1);
  const baseline = dspPos.slice(1, 2);

  return [align === 'L' ? 'left' : align === 'R' ? 'right' : 'center', baseline === 'T' ? 'top' : baseline === 'B' ? 'bottom' : 'middle'];
}
