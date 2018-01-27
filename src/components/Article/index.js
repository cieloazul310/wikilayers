import React from 'react';

import PageWrapper from '../PageWrapper';
import PageContainer from '../PageContainer';
import WikiContent from '../../containers/Article/WikiContent';
import AdBox from '../AdBox';

const ArticleComponent = () => <PageContainer component={(
  <div>
    <WikiContent />
    <AdBox />
  </div>
)} />


const Article = () => <PageWrapper component={<ArticleComponent />} />;

export default Article;
