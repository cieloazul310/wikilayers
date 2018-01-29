import React from 'react';

import Basic from '../Basic';
import '../article.css';

const Attrs = () => (
  <div>
    <h3>{'Map Attributions'}</h3>
    <h4>地理院地図</h4>
    <a
      href="https://maps.gsi.go.jp/development/ichiran.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      {'地理院タイル(標準地図)'}
    </a>

    <li>{'帰属: 国土地理院'}</li>
    <li>
      {
        'データソース: 電子国土基本図, 小縮尺地図(100万分1), 小縮尺地図(500万分1), 地球地図（標高）'
      }
    </li>
    <small>
      {
        'The bathymetric contours are derived from those contained within the GEBCO Digital Atlas, published by the BODC on behalf of IOC and IHO (2003) (http://www.gebco.net)'
      }
      <br />
      {'海上保安庁許可第292502号（水路業務法第25条に基づく類似刊行物）」'}
      <br />
      {
        'Shoreline data is derived from: United States. National Imagery and Mapping Agency. "Vector Map Level 0 (VMAP0)." Bethesda, MD: Denver, CO: The Agency; USGS Information Services, 1997.'
      }
    </small>

    <h4>OpenStreetMap</h4>
    <a
      href="https://maps.gsi.go.jp/development/ichiran.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      {'OpenStreetMap (Mapnik)'}
    </a>
    <li>{'帰属: © OpenStreetMap contributors'}</li>
    <li>{'データソース: OpenStreetMap'}</li>

    <h4>写真</h4>
    <a
      href="https://maps.gsi.go.jp/development/ichiran.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      {'地理院タイル(写真)'}
    </a>

    <li>{'帰属: 国土地理院'}</li>
    <li>
      {
        'データソース: 全国最新写真（シームレス）, 全国ランドサットモザイク画像, 世界衛星モザイク画像'
      }
    </li>
    <small>
      {
        'データソース：Landsat8画像（GSI,TSIC,GEO Grid/AIST）, Landsat8画像（courtesy of the U.S. Geological Survey）, 海底地形（GEBCO）'
      }
      <br />
      {
        'Images on 世界衛星モザイク画像 obtained from site https://lpdaac.usgs.gov/data_access maintained by the NASA Land Processes Distributed Active Archive Center (LP DAAC), USGS/Earth Resources Observation and Science (EROS) Center, Sioux Falls, South Dakota, (Year). Source of image data product.'
      }
    </small>

    <h4>{"写真(70's)"}</h4>

    <a
      href="https://maps.gsi.go.jp/development/ichiran.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      {'地理院タイル(白地図)'}
    </a>
    <li>{'帰属: 国土地理院'}</li>
    <li>{'データソース: 国土画像情報'}</li>

    <a
      href="https://maps.gsi.go.jp/development/ichiran.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      {'地理院タイル(白地図)'}
    </a>

    <li>{'帰属: 国土地理院'}</li>
    <li>{'データソース: 白地図'}</li>

    <h4>色別標高図</h4>
    <a
      href="https://maps.gsi.go.jp/development/ichiran.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      {'地理院タイル(色別標高図)'}
    </a>

    <li>{'帰属: 国土地理院'}</li>
    <li>{'データソース: 色別標高図'}</li>
    <small>{'海域部は海上保安庁海洋情報部の資料を使用して作成'}</small>

    <h4>傾斜量図</h4>
    <a
      href="https://maps.gsi.go.jp/development/ichiran.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      {'地理院タイル(傾斜量図)'}
    </a>

    <li>{'帰属: 国土地理院'}</li>
    <li>{'データソース: 標高タイル（基盤地図情報 数値標高モデル）'}</li>

    <h4>地形スペシャル</h4>

    <p>{'地理院タイル(色別標高図) 上記「色別標高図」を参照'}</p>
    <p>{'地理院タイル(傾斜量図) 上記「傾斜量図」を参照'}</p>

    <a
      href="https://maps.gsi.go.jp/development/ichiran.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      {'地理院タイル(淡色地図)'}
    </a>

    <li>{'帰属: 国土地理院'}</li>
    <li>{'データソース: 電子国土基本図'}</li>

    <a
      href="http://nlftp.mlit.go.jp/ksj/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {'国土数値情報(湖沼)をTopoJSONに変換したデータ'}
    </a>

    <li>{'帰属: 国土交通省国土政策局国土情報課'}</li>
    <li>{'データソース: 国土数値情報'}</li>
    <small>
      {
        '国土地理院「数値地図25000（空間データ基盤）」、「数値地図25000（地名・公共施設）」※平成14（2002）年～平成15（2003）年刊行のもの'
      }
      <br />
      {
        '国土地理院「日本の湖沼アトラス（国土地理院技術資料D1-No,299）」　※完成年度：平成3(1991)年'
      }
      <br />
      {
        '国土政策局「国土数値情報・統一フォーマット（湖沼台帳、湖岸線）」　※データ基準年：昭和50（1975）年'
      }
    </small>

    <h4>World Terrain</h4>
    <a href="http://maps.stamen.com/" target="_blank" rel="noopener noreferrer">
      {'Stamen Map (Terrain)'}
    </a>

    <li>帰属: Stamen Design</li>
    <li>データソース: OpenStreetMap</li>

    <h4>monochrome</h4>
    <a href="http://maps.stamen.com/" target="_blank" rel="noopener noreferrer">
      {'Stamen Map (Toner)'}
    </a>
    <li>{'帰属: Stamen Design'}</li>
    <li>{'データソース: OpenStreetMap'}</li>
  </div>
);

const MapAttributions = () => (
  <div>
    <Basic
      component={
        <div className="article">
          <Attrs />
        </div>
      }
    />
  </div>
);

export default MapAttributions;
