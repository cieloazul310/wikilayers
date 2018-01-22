import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import olFeature from 'ol/feature';
import geomPoint from 'ol/geom/point';
import Proj from 'ol/proj';

import commonStyles from '../../commonStyles';

const DummyFeature = ({ addFeature }) => (
    <div>
      <RaisedButton
        label="ダミーオブジェクト"
        secondary={true}
        onClick={() => {
          const feature = new olFeature({
            geometry: new geomPoint(Proj.fromLonLat([140.1 + Math.random() / 2, 36 + Math.random()])),
            name: `feature-${Math.round(Math.random() * 100)}`,
            pageid: Math.round(Math.random() * 100000),
            visibility: true,
            selected: false,
            removed: false,
            extract: 'オリジン間リソース共有 (Cross-Origin Resource Sharing, CORS) は、追加の HTTP ヘッダを使用して、ユーザーエージェントが現在のサイトとは別のオリジン（ドメイン）のサーバーから選択されたリソースにアクセスする権限を得られるようにする仕組みです。ユーザーエージェントは、現在の文書のオリジンとは異なるドメイン、プロトコル、ポート番号からリソースをリクエストするとき、オリジン間 HTTP リクエストを発行します。例えば http://domain-a.com から読み込まれた HTML ページが、http://domain-b.com/image.jpg に対して <img> src でリクエストを行う場合です。今日の Web 上では、多くのページが CSS スタイルシートや画像、スクリプトといったリソースを、コンテンツ配信ネットワーク（CDN）などの別のドメインから読み込んでいます。'
          });
          addFeature(feature);
        }}
      />
    </div>
);

export default DummyFeature;
