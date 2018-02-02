import React from 'react';
import { Translate } from 'react-redux-i18n';

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
    <PageHeader title={<Translate value="routes.settings" />} />
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
