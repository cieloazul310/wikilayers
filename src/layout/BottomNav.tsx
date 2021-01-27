import * as React from 'react';
import { useLocation } from 'react-router';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PlaceIcon from '@material-ui/icons/Place';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import DescriptionIcon from '@material-ui/icons/Description';
import { Translate } from 'react-redux-i18n';

function BottomNav() {
  const { pathname } = useLocation();

  return (
    <BottomNavigation
      value={pathname === '/map' ? 0 : pathname === '/' ? 1 : pathname === '/article' ? 2 : pathname === '/settings' ? 3 : null}
    >
      <BottomNavigationAction label={<Translate value="routes.map" />} icon={<PlaceIcon />} showLabel />
      <BottomNavigationAction label={<Translate value="routes.search" />} icon={<SearchIcon />} showLabel />
      <BottomNavigationAction label={<Translate value="routes.read" />} icon={<DescriptionIcon />} showLabel />
      <BottomNavigationAction label={<Translate value="routes.settings" />} icon={<SettingsIcon />} showLabel />
    </BottomNavigation>
  );
}

export default BottomNav;
