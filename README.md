# WikiLayers

![WikiLayers](./src/img/showcase.png "WikiLayers")

**WikiLayers**（ウィキレイヤーズ）は Wikipedia から座標を取得し地図で表示するアプリケーションです。  
このアプリケーションは [TypeScript], [React], [Material-UI], [OpenLayers] で作られています。

URL: <https://cieloazul310.github.io/wikilayers/>

## 遊び方

1. 検索フォームに表示したい記事の**タイトル**を入れて検索
2. 記事の座標を取得したら「**地図に追加**」を押す
3. 「**地図**」を見る

## 地図に追加できる記事

Wikipediaの記事に座標がついているものであれば取得可能です。

- **都市・地名**: 水戸市、小名浜、ラスベガス、ポンペイ など
- **史跡・名所**: 水戸城、偕楽園、法隆寺、コロッセウム など
- **建築・土木**: 東京タワー、トキワ荘、猿橋、サヴォア邸 など
- **山岳・地形**: 富士山、室戸岬、ヌル島、カイバル峠 など
- **スタジアム**: ケーズデンキスタジアム水戸、日立柏サッカー場、アザディ・スタジアム など
- **歴史上の事件**: 本能寺の変、池田屋事件、ワールシュタットの戦い、ウッドストック・フェスティバル など

## その他の機能

- 「読む」ページでは選択した記事の本文を見ることができます。
- 5種類の**背景地図**が選べます。
- GPSを使った**現在地の表示**ができます。
- ローカルストレージに情報が保存されるので、アプリを離れても状態は維持されます。
- 設定ページで取得したアイテムから**GeoJSONファイルを出力**することができます。

### 地図の利用について

このアプリケーションはWikimedia Foundationの定める[利用規約]、[ウィキペディアを二次利用する][二次利用]、及び[国土地理院コンテンツ利用規約]に基づき作成されています。
Wikipediaを情報源としている部分においては、[クリエイティブ・コモンズ 表示-継承 3.0 非移植(CC-BY-SA 3.0) ライセンス][CC-BY-SA 3.0]に基づきWikipediaが出典であることを明示して、誰でも自由に利用可能です。

地図画面を二次利用する場合は地図画面右下に表示されている地図の帰属を明記してください。

### アップデート

- 2021/02/07 v2.0 リニューアル
- 2018/02/02 v1.1 英語版など
- 2018/01/29 v1.0 公開

### 付記

- **Version**: 2.0 (2021/02/07)
- **作成者**: [@cieloazul310]
- **GitHub**: <https://github.com/cieloazul310/wikilayers/>
- **水戸地図**: <https://cieloazul310.github.io>

Copyright © 2021 cieloazul310 All right reserved.

[@cieloazul310]: https://twitter.com/cieloazul310
[TypeScript]: https://www.typescriptlang.org/
[React]: https://reactjs.org/
[Material-UI]: https://material-ui.com/
[OpenLayers]: http://openlayers.org/
<!-- 
WIKIMEDIA FOUNDATION 利用規約
-->
[利用規約]: https://wikimediafoundation.org/wiki/Terms_of_Use/ja
<!-- 
Wikipedia:ウィキペディアを二次利用する
-->
[二次利用]: https://ja.wikipedia.org/wiki/Wikipedia:%E3%82%A6%E3%82%A3%E3%82%AD%E3%83%9A%E3%83%87%E3%82%A3%E3%82%A2%E3%82%92%E4%BA%8C%E6%AC%A1%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B
<!--
国土地理院コンテンツ利用規約
-->
[国土地理院コンテンツ利用規約]: http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html
<!--
クリエイテブ・コモンズ 3.0
-->
[CC-BY-SA 3.0]: http://creativecommons.org/licenses/by-sa/3.0/
