import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MuiLink, { LinkProps } from '@material-ui/core/Link';
import PageContainer from '../../components/PageContainer';
import Title from '../../components/Search/Title';
import useGaTrackPage from '../../utils/useGaTrackPage';

function Link({ children, href }: LinkProps) {
  return (
    <MuiLink href={href} color="secondary" target="_blank" rel="noopener noreferrer">
      {children}
    </MuiLink>
  );
}

function About(): JSX.Element {
  const { pathname } = useLocation();
  useGaTrackPage(pathname);

  return (
    <PageContainer>
      <Container>
        <Title />
        <section>
          <Typography variant="h5" component="h2" gutterBottom>
            使い方
          </Typography>
          <Typography paragraph>
            WikiLayers は Wikipedia から座標を取得し、地図で表示するアプリケーションです。検索フォームで Wikipedia
            の記事を検索して、地図に追加してみましょう。
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            地図
          </Typography>
          <Typography paragraph>
            記事を地図に追加すると、アプリケーションの地図に表示されます。画面下部の「地図」タブで地図が表示されます。設定から好きな背景地図を選ぶことができます。
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            読む
          </Typography>
          <Typography paragraph>
            選択した記事はアプリケーション上で読むことができます。画面下部の「読む」タブで記事本文が表示されます。
          </Typography>
        </section>
        <section>
          <Typography variant="h5" component="h2" gutterBottom>
            WikiLayers
          </Typography>
          <Typography paragraph>
            このアプリケーションは Wikimedia Foundation の定める
            <Link href="https://wikimediafoundation.org/wiki/Terms_of_Use/ja">利用規約</Link>、
            <Link href="https://ja.wikipedia.org/wiki/Wikipedia:%E3%82%A6%E3%82%A3%E3%82%AD%E3%83%9A%E3%83%87%E3%82%A3%E3%82%A2%E3%82%92%E4%BA%8C%E6%AC%A1%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B">
              ウィキペディアを二次利用する
            </Link>
            、及び<Link href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html">国土地理院コンテンツ利用規約</Link>
            に基づき作成されています。
            <br />
            Wikipedia を情報源としている部分においては、
            <Link href="http://creativecommons.org/licenses/by-sa/3.0/">
              クリエイティブ・コモンズ 表示-継承 3.0 非移植(CC-BY-SA 3.0) ライセンス
            </Link>
            に基づき Wikipedia が出典であることを明示して、誰でも自由に利用可能です。
            <br />
            地図画面を二次利用する場合は地図画面右下に表示されている地図の帰属を明記してください。
            <br />
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            制作
          </Typography>
          <Typography paragraph>
            <Link href="https://cieloazul310.github.io">水戸地図</Link>
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            作者
          </Typography>
          <Typography paragraph>
            <Link href="https://twitter.com/cieloazul310">@cieloazul310</Link>
          </Typography>
        </section>
        <footer>
          <Typography variant="body2" align="center" paragraph>
            Copyright © 2021 cieloazul310 All right reserved.
          </Typography>
        </footer>
      </Container>
    </PageContainer>
  );
}

export default About;
