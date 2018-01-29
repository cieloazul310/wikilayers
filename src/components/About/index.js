import React from 'react';

import PageContainer from '../PageContainer';
import PageWrapper from '../PageWrapper';
import AppInfo from './AppInfo';
import MapAttributions from './MapAttributions';
import CopyRight from '../CopyRight';
import PageHeader from '../PageHeader';
import AdBox from '../AdBox';

const AboutComponent = () => <PageContainer component={(
  <div>
    <PageHeader title="About WikiLayers" />
    <AppInfo />
    <AdBox type="article" />
    <MapAttributions />
    <AdBox />
    <CopyRight />
  </div>
)} />;

const About = () => <PageWrapper component={<AboutComponent />} />;

export default About;
