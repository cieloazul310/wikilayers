const translationsObject = {
  en: {
    intro: {
      title: 'Awesome app with i18n!',
      leader: "Let's Search Wikipedia and View on Map!"
    },
    routes: {
      map: 'Map',
      search: 'Search',
      read: 'Read',
      settings: 'Settings',
      about: 'About WikiLayers'
    },
    card: {
      add: 'Add',
      view: 'View',
      close: 'close',
      noCoords: 'No Coordinates',
      failure: 'Search Failed',
      readMore: 'Read More',
    },
    features: {
      title: 'Items',
      visible: 'Visible',
      invisible: 'hidden',
      view: 'View on Map',
      read: 'Read it',
      remove: 'Remove'
    },
    howTo: {
      title: 'How to Play',
      firstTitle: 'Search',
      firstText: 'Type a word you want to search or the title or the URL of Article.',
      secondTitle: 'Add to the Map',
      secondText: "You'll get the result, then press 'Add' button.",
      thirdTitle: 'View on the Map',
      thirdText: 'View the Map via Bottom Navigation.'
    },
    settings: {
      title: 'Settings',
      mapSettings: 'Settings',
      showLabels: 'Always Show Labels',
      geolocation: 'Show where you are',
      baseLayers: 'Base Layers',
      mapAction: 'Actions',
      exportGeoJSON: 'Export Items as GeoJSON',
      removeItems: 'Remove All Items',
      removeDialog: 'Remove All Items',
      initialize: 'Initialize App',
      initializeDialog: 'Initialize App',
      ok: 'OK',
      cancel: 'Cancel',
      download: 'Download',
      langTitle: 'Language',
      uiLang: 'User Language',
      searchLang: 'Language for Search'
    },
    date: {
      long: 'MMMM Do, YYYY'
    },
    export: 'Export %{count} items',
    export_0: 'Nothing to export',
    export_1: 'Export %{count} item',
    two_lines: 'Line 1<br />Line 2',
    literal_two_lines: 'Line 1\n Line 2'
  },
  ja: {
    intro: {
      title: 'WikiLayers',
      leader: 'Wikipediaを検索して地図に表示しよう！'
    },
    routes: {
      map: '地図',
      search: '探す',
      read: '読む',
      settings: '設定',
      about: 'WikiLayersについて'
    },
    card: {
      add: '地図に加える',
      view: '地図で見る',
      close: '閉じる',
      noCoords: '座標がありません',
      failure: '記事の取得に失敗しました',
      readMore: '続きを読む',
    },
    features: {
      title: 'アイテム',
      visible: '表示中',
      invisible: '非表示',
      view: '地図で見る',
      read: '記事を読む',
      remove: '削除'
    },
    howTo: {
      title: '遊び方',
      firstTitle: '検索',
      firstText: '検索したい語句、記事のタイトル、記事のURLを入れます',
      secondTitle: '地図に追加',
      secondText: "検索結果が出たら「地図に追加」をクリック",
      thirdTitle: '地図を見る',
      thirdText: '下メニューの「地図」で地図が表示されます'
    },
    settings: {
      title: '設定',
      mapSettings: '設定',
      showLabels: 'アイテムのラベルを常に表示',
      geolocation: '現在地を表示',
      baseLayers: '背景地図',
      mapAction: '機能',
      exportGeoJSON: 'アイテムをGeoJSONで出力',
      removeItems: '全てのアイテムを消去',
      removeDialog: '全てのアイテムを消去しますか？',
      initialize: '設定を初期化する',
      initializeDialog: '設定を初期化しますか？',
      ok: '実行',
      cancel: 'キャンセル',
      download: 'ダウンロード',
      langTitle: '言語の設定',
      uiLang: '言語',
      searchLang: '検索で使う言語'
    },
    date: {
      long: 'D MMMM YYYY'
    },
    export: 'Exporteer %{count} dingen',
    export_0: 'Niks te exporteren',
    export_1: 'Exporteer %{count} ding',
    two_lines: 'Regel 1<br />Regel 2',
    literal_two_lines: 'Regel 1\n Regel 2'
  }
};

export default translationsObject;
