import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';

import olFeature from 'ol/feature';
import geomPoint from 'ol/geom/point';
import Proj from 'ol/proj';

const DummyFeature = ({ addFeature }) => (
      <RaisedButton
        label="ダミーを追加"
        secondary={true}
        onClick={() => {
          const article = {
            title: `feature-${Math.round(Math.random() * 100)}`,
            coordinates: [
              {
                lon: 140.1 + Math.random() / 2,
                lat: 36 + Math.random()
              }
            ],
            pageid: Math.round(Math.random() * 100000),
            extract: 'オリジン間リソース共有 (Cross-Origin Resource Sharing, CORS) は、追加の HTTP ヘッダを使用して、ユーザーエージェントが現在のサイトとは別のオリジン（ドメイン）のサーバーから選択されたリソースにアクセスする権限を得られるようにする仕組みです。ユーザーエージェントは、現在の文書のオリジンとは異なるドメイン、プロトコル、ポート番号からリソースをリクエストするとき、オリジン間 HTTP リクエストを発行します。例えば http://domain-a.com から読み込まれた HTML ページが、http://domain-b.com/image.jpg に対して <img> src でリクエストを行う場合です。今日の Web 上では、多くのページが CSS スタイルシートや画像、スクリプトといったリソースを、コンテンツ配信ネットワーク（CDN）などの別のドメインから読み込んでいます。'
          };
          const feature = new olFeature({
            geometry: new geomPoint(Proj.fromLonLat([article.coordinates[0].lon, article.coordinates[0].lat])),
            name: article.title,
            visibility: true,
            selected: false,
            article: article
          });
          addFeature(feature);
        }}
      />
);

DummyFeature.propTypes = {
  addFeature: PropTypes.func.isRequired
};

export default DummyFeature;
