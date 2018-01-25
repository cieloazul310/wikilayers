import React from 'react';
import Subheader from 'material-ui/Subheader';

import commonStyles from '../../commonStyles';

const AppInfo = () => (
  <div style={commonStyles.components}>
    <Subheader>About WikiLayers!</Subheader>
    <p>WikiLayersはWikipediaの地理情報を地図で表示するアプリケーションです。</p>
    <p>このアプリケーションはWIKIMEDIA FOUNDATIONの定める[利用規約]、[ウィキペディアを二次利用する][二次利用]、及び[国土地理院コンテンツ利用規約]に基づき作成されています。<br />
    上記のWikipediaを情報源としている部分においては、[クリエイティブ・コモンズ 表示-継承 3.0 非移植(CC-BY-SA 3.0) ライセンス][CC-BY-SA 3.0]に基づきWikipediaが出典であることを明示して、誰でも自由に利用可能です。</p>
    <p>地図画面を二次利用する場合は地図画面右下に表示されている地図の帰属を明記してください。</p>
    <ul>
      <li>地理院地図</li>
      <li>写真</li>
      <li>色別標高図</li>
      <li>傾斜量図</li>
      <li>地形スペシャル</li>
    </ul>
    <p>また、以上の5つの地図を二次利用する場合は別途[国土地理院コンテンツ利用規約]を参照してください。</p>
    <ul>
      <li>作成者: @cieloazul310</li>
      <li>GitHub Repository</li>
    </ul>
  </div>
);

export default AppInfo;
