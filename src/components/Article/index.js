import React from 'react';

import PageWrapper from '../PageWrapper';
import PageContainer from '../PageContainer';
import WikiContent from '../../containers/Article/WikiContent';
import CopyRight from '../CopyRight';
import AdBox from '../AdBox';

const ArticleComponent = () => (
  <PageContainer
    component={
      <div>
        <WikiContent />
        <AdBox type="top" />
        <CopyRight />
      </div>
    }
  />
);

const Article = () => <PageWrapper component={<ArticleComponent />} />;

export default Article;
