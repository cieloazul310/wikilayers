import React from 'react';

import PageContainer from '../PageContainer';
import PageWrapper from '../PageWrapper';

import WikiIntro from '../../containers/Search/WikiIntro';
import WikiForms from '../../containers/Search/WikiForms';
import WikiResult from '../../containers/Search/WikiResult';
import WikiFeatureList from '../../containers/Search/WikiFeatureList';
import AdBox from '../AdBox';

const SearcherComponent = () => <PageContainer component={(
  <div>
    <WikiIntro />
    <WikiForms />
    <WikiResult />
    <AdBox type="article" style={{maxHeight: '50vw'}}/>
    <WikiFeatureList />
  </div>
)} />;

const Searcher = () => <PageWrapper component={<SearcherComponent />} />;

export default Searcher;
