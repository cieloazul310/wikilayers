import React from 'react';
import Markdown from 'react-markdown';
import Subheader from 'material-ui/Subheader';

import Basic from '../Basic';
import Icon from '../../img/icon256.png';
import '../article.css';

const Readme = () => (
  <div>
    <p>
      <b>WikiLayers</b>（ウィキレイヤーズ）はWikipediaから座標を取得し地図で表示するアプリケーションです。
    </p>
    <h3>遊び方</h3>
    <ol>
      <li>
        {
          '検索フォームに表示したい記事のタイトル、またはURLを入れて検索（「水戸城」「https://ja.wikipedia.org/wiki/偕楽園」など）'
        }
      </li>
      <li>記事の座標を取得したら「地図に追加」を押す</li>
      <li>「地図」を見る</li>
    </ol>
    <h4>その他諸機能</h4>
    <ul>
      <li>URLによる検索では多国語に対応しています。</li>
      <li>記事ページで選択した記事の本文を見ることができます。</li>
      <li>{'8種類の背景地図が選べます。'}</li>
      <li>GPSを使った現在地の表示ができます。</li>
      <li>
        スマートフォンでWikiLayersをホーム画面に追加すると、全画面でWikiLayersを起動できます。
      </li>
      <li>
        ローカルストレージに情報が保存されるので、アプリを離れても状態は維持されます。
      </li>
      <li>
        設定ページで取得したアイテムからGeoJSONファイルを出力することができます。
      </li>
    </ul>
    <h3>地図の利用について</h3>
    <p>
      このアプリケーションはWikimedia Foundationの定める<a
        href="https://wikimediafoundation.org/wiki/Terms_of_Use/ja"
        target="_blank"
      >
        利用規約
      </a>、<a
        href="https://ja.wikipedia.org/wiki/Wikipedia:%E3%82%A6%E3%82%A3%E3%82%AD%E3%83%9A%E3%83%87%E3%82%A3%E3%82%A2%E3%82%92%E4%BA%8C%E6%AC%A1%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B"
        target="_blank"
      >
        ウィキペディアを二次利用する
      </a>、及び<a
        href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html"
        target="_blank"
      >
        国土地理院コンテンツ利用規約
      </a>に基づき作成されています。<br />
      Wikipediaを情報源としている部分においては、<a
        href="http://creativecommons.org/licenses/by-sa/3.0/"
        target="_blank"
      >
        クリエイティブ・コモンズ 表示-継承 3.0 非移植(CC-BY-SA 3.0) ライセンス
      </a>に基づきWikipediaが出典であることを明示して、誰でも自由に利用可能です。
    </p>
    <p>
      地図画面を二次利用する場合は必ず地図画面右下に表示されている地図の帰属を明記してください。
    </p>
    <ul>
      <li>地理院地図</li>
      <li>写真</li>
      <li>色別標高図</li>
      <li>傾斜量図</li>
      <li>地形スペシャル</li>
    </ul>
    <p>
      また、以上の5つの地図を二次利用する場合は別途<a
        href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html"
        target="_blank"
      >
        国土地理院コンテンツ利用規約
      </a>を参照してください。
    </p>
    <p>WikiLayersの表記については任意とします。</p>
    <ul>
      <li>{'Version: 1.0 (2018/01/28)'}</li>
      <li>
        作成者:{' '}
        <a href="https://twitter.com/cieloazul310" target="_blank">
          @cieloazul310
        </a>
      </li>
      <li>
      GitHub:{' '}
        <a href="https://github.com/cieloazul310/wikilayers/" target="_blank">
          {'https://github.com/cieloazul310/wikilayers/'}
        </a>
      </li>
      <li>
        水戸地図{' '}
        <a href="https://cieloazul310.github.io" target="_blank">
          {'https://cieloazul310.github.io'}
        </a>
      </li>
    </ul>
    <p>Copyright © 2018 cieloazul310 All right reserved.</p>
  </div>
);

const AppInfo = () => (
  <div>
    <Subheader>About WikiLayers!</Subheader>
    <Basic
      component={
        <div className="article">
          <div style={{ textAlign: 'center' }}>
            <img src={Icon} style={{ width: 80 }} alt="水戸地図" />
            <h5 style={{ margin: 'auto' }}>水戸地図</h5>
          </div>
          <Readme />
        </div>
      }
    />
  </div>
);

export default AppInfo;
