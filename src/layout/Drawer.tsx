import * as React from 'react';
import Box from '@material-ui/core/Box';
import DrawerSearch from './DrawerSearch';
import WikiLayersTitle from '../components/WikiLayersTitle';
import FeaturesList from '../components/FeaturesList';
import AppStateHandler from '../components/AppStateHandler';
import MapStateHandler from '../components/MapStateHandler';
import ThemeStateHandler from '../components/ThemeStateHandler';
import StateActions from '../components/StateActions';
import Credit from '../components/Credit';

function AppDrawer(): JSX.Element {
  return (
    <div>
      <Box py={4}>
        <WikiLayersTitle variant="h4" />
      </Box>
      <DrawerSearch />
      <FeaturesList />
      <MapStateHandler />
      <AppStateHandler />
      <ThemeStateHandler />
      <StateActions />
      <Credit />
    </div>
  );
}

export default AppDrawer;
