import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Search from 'material-ui/svg-icons/action/search';
import olFeature from 'ol/feature';
import geomPoint from 'ol/geom/point';
import Proj from 'ol/proj';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            margin: 'auto'
          }}
        >
          <TextField
            hintText="https://ja.wikipedia.org/wiki/偕楽園 or 偕楽園"
            value={this.state.title}
            onChange={this.handleChange}
            style={{
              width: '80%'
            }}
          />
          <RaisedButton
            label="検索"
            primary={true}
            icon={<Search />}
            onClick={() => {
              this.props.onButtonClick(this.state.title);
            }}
          />
        </div>
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
            this.props.onAddFeatureClick(feature);
          }}
        />
      </div>
    );
  }
}

export default Forms;
