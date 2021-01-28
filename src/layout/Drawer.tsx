import * as React from 'react';
import DrawerSearch from './DrawerSearch';
import FeaturesList from '../components/FeaturesList';
import AppStateHandler from '../components/AppStateHandler';
import ThemeStateHandler from '../components/ThemeStateHandler';

interface Props {
  toggleDrawer: () => void;
}

function AppDrawer({ toggleDrawer }: Props) {
  return (
    <div>
      <DrawerSearch />
      <FeaturesList />
      <AppStateHandler />
      <ThemeStateHandler />
    </div>
  );
}

export default AppDrawer;
