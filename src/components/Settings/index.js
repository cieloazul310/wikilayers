import React from 'react';

import PageContainer from '../PageContainer';
import PageWrapper from '../PageWrapper';
import WikiMapSettings from '../../containers/Settings/WikiMapSettings';
import WikiLayerList from '../../containers/Settings/WikiLayerList';
import WikiMapActions from '../../containers/Settings/WikiMapActions';
import AppInfo from './AppInfo';
import PageHeader from '../PageHeader';
import AdBox from '../AdBox';

const SettingsComponent = () => <PageContainer component={(
  <div>
    <PageHeader title="設定" />
    <WikiMapSettings />
    <WikiLayerList />
    <WikiMapActions />
    <AppInfo />
    <AdBox />
  </div>
)} />;

const Settings = () => <PageWrapper component={<SettingsComponent />} />;

export default Settings;
