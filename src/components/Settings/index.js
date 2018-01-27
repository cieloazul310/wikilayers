import React from 'react';

import Paper from 'material-ui/Paper';

import WikiPageWrapper from '../../containers/WikiPageWrapper';
import WikiMapSettings from '../../containers/Settings/WikiMapSettings';
import WikiLayerList from '../../containers/Settings/WikiLayerList';
import WikiMapActions from '../../containers/Settings/WikiMapActions';
import AppInfo from './AppInfo';
import PageHeader from '../PageHeader';
import Basic from '../Basic';
import AdBox from '../AdBox';

import commonStyles from '../../commonStyles';

const SettingsComponent = () => (
  <div style={commonStyles.containerOuter}>
    <Paper style={commonStyles.containerInner}>
      <PageHeader title="設定" />
      <WikiMapSettings />
      <WikiLayerList />
      <WikiMapActions />
      <AppInfo />
      <Basic component={<AdBox />} />
    </Paper>
  </div>
);

const Settings = () => (
  <div>
    <WikiPageWrapper component={<SettingsComponent />} />
  </div>
);

export default Settings;
