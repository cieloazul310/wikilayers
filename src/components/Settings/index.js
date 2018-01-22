import React from 'react';
import Paper from 'material-ui/Paper';
import WikiLayerList from '../../containers/Settings/WikiLayerList';
import AppInfo from './AppInfo';
import commonStyles from '../../commonStyles';

const Settings = () => (
  <div style={commonStyles.containerOuter}>
    <Paper style={commonStyles.containerInner}>
      <div style={commonStyles.pageHeader}>
        <h2 style={commonStyles.pageTitle}>
          設定
        </h2>
      </div>
      <WikiLayerList />
      <AppInfo />
    </Paper>
  </div>
);

export default Settings;
