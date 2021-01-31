import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { MapIcon, SearchIcon, ReadIcon, SettingsIcon } from '../icons';
import { Translate } from 'react-redux-i18n';

function BottomNav() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <BottomNavigation
      value={pathname === '/' ? 0 : pathname === '/search' ? 1 : pathname === '/article' ? 2 : pathname === '/settings' ? 3 : null}
      showLabels
    >
      <BottomNavigationAction component={Link} to="/" label={<Translate value="routes.map" />} icon={<MapIcon />} />
      <BottomNavigationAction component={Link} to="/search" label={<Translate value="routes.search" />} icon={<SearchIcon />} />
      <BottomNavigationAction component={Link} to="/article" label={<Translate value="routes.read" />} icon={<ReadIcon />} />
      <BottomNavigationAction component={Link} to="/settings" label={<Translate value="routes.settings" />} icon={<SettingsIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
