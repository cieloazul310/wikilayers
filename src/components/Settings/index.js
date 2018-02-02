import React from 'react';

import PageContainer from '../PageContainer';
import PageWrapper from '../PageWrapper';
import WikiMapSettings from '../../containers/Settings/WikiMapSettings';
import WikiLayerList from '../../containers/Settings/WikiLayerList';
import WikiMapActions from '../../containers/Settings/WikiMapActions';
import WikiListAbout from '../../containers/Settings/WikiListAbout';
import WikiLanguages from '../../containers/Settings/WikiLanguages';
import CopyRight from '../CopyRight';
import PageHeader from '../PageHeader';
import AdBox from '../AdBox';

const SettingsComponent = () => <PageContainer component={(
  <div>
    <PageHeader title="設定" />
    <WikiMapSettings />
    <WikiLayerList />
    <WikiMapActions />
    <WikiLanguages />
    <WikiListAbout />
    <AdBox />
    <CopyRight />
  </div>
)} />;

const Settings = () => <PageWrapper component={<SettingsComponent />} />;

export default Settings;
