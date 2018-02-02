import React from 'react';

import PageContainer from '../PageContainer';
import PageWrapper from '../PageWrapper';

import WikiIntro from '../../containers/Search/WikiIntro';
import WikiForms from '../../containers/Search/WikiForms';
import WikiResult from '../../containers/Search/WikiResult';
import WikiFeatureList from '../../containers/Search/WikiFeatureList';
import WikiHowTo from '../../containers/Search/WikiHowTo';
import CopyRight from '../CopyRight';
import AdBox from '../AdBox';

import { adBelowForm } from '../../commonStyles';

const SearcherComponent = () => (
  <PageContainer
    component={
      <div>
        <WikiIntro />
        <WikiForms />
        <AdBox type="top" style={adBelowForm} />
        <WikiResult />
        <WikiFeatureList />
        <WikiHowTo />
        <AdBox />
        <CopyRight />
      </div>
    }
  />
);

const Searcher = () => <PageWrapper component={<SearcherComponent />} />;

export default Searcher;
