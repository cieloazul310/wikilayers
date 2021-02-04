import { FeatureLike } from 'ol/Feature';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { PaletteType } from '@material-ui/core';

/** rtCode10: string
 * 0 新幹線及び地下鉄以外
 * 1 新幹線
 * 2 地下鉄
 */

/** snglDbl
 *  0 非表示
 *  1 単線
 *  2 複線以上
 *  3 側線
 *  4 駅部分
 */
function railWayWidth(feature: FeatureLike, resolution: number) {
  const { snglDbl, rtCode10 } = feature.getProperties();
  if (rtCode10 === '1') return 4;
  return snglDbl === 2 ? 2 : 1;
}

/** railState
 * 0 地上
 * 100 トンネル
 * 200 雪覆い
 * 300 地下
 * 400 路面
 * 500 坑口無しトンネル
 *
 * 0 通常部
 * 1 橋・高架
 * 2 トンネル
 * 3 地下
 * 4 雪覆い
 * 5 運休中
 * 6 その他
 * 7 不明
 */
function railwayZIndex(feature: FeatureLike) {
  const { railState } = feature.getProperties();
  if (railState === 100 || railState === 200 || railState === 300 || railState === 2 || railState === 3 || railState === 4) return 1;
  return railState === 1 ? 10 : 3;
}

function ShinkansenColor(rtCode10: string, paletteType: PaletteType) {
  if (rtCode10 === '1') return '#77f';
  return paletteType === 'light' ? '#777' : '#555';
}

export default function railwayStyle(feature: FeatureLike, resolution: number, paletteType: PaletteType = 'light'): Style | Style[] {
  const { snglDbl, rtCode10, rtCode1 } = feature.getProperties();
  if (snglDbl === 0) return new Style();
  if (snglDbl === 4)
    return new Style({
      stroke: new Stroke({
        color: '#c9c',
        width: 5,
      }),
      zIndex: 10,
    });
  const width = railWayWidth(feature, resolution);
  const code = rtCode1?.slice(0, 5);

  if (code === '40203') return new Style();
  if (code === '40201' || code === '40216')
    return [
      new Style({
        stroke: new Stroke({
          color: ShinkansenColor(rtCode10, paletteType),
          width: width + 1,
        }),
        zIndex: railwayZIndex(feature),
      }),
      new Style({
        stroke: new Stroke({
          width,
          color: paletteType === 'light' ? '#ddd' : '#777',
          lineDash: [4, 8],
        }),
        zIndex: railwayZIndex(feature),
      }),
    ];

  return new Style({
    stroke: new Stroke({
      width,
      color: paletteType === 'light' ? '#777' : '#555',
    }),
    zIndex: railwayZIndex(feature),
  });
}
