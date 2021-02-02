import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { MapIcon, SearchIcon, ReadIcon, SettingsIcon } from '../icons';
import { Translate } from 'react-redux-i18n';
import { useIsMobile } from '../utils/useIsMobile';

function BottomNav() {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  return (
    <BottomNavigation
      value={
        pathname === '/'
          ? 'map'
          : pathname === '/search'
          ? 'search'
          : pathname === '/article'
          ? 'article'
          : pathname === '/settings'
          ? 'settings'
          : null
      }
      showLabels
    >
      <BottomNavigationAction component={Link} to="/" value="map" label={<Translate value="routes.map" />} icon={<MapIcon />} />
      {isMobile ? (
        <BottomNavigationAction
          component={Link}
          to="/search"
          value="search"
          label={<Translate value="routes.search" />}
          icon={<SearchIcon />}
        />
      ) : null}
      <BottomNavigationAction
        component={Link}
        to="/article"
        value="article"
        label={<Translate value="routes.read" />}
        icon={<ReadIcon />}
      />
      {isMobile ? (
        <BottomNavigationAction
          component={Link}
          to="/settings"
          value="settings"
          label={<Translate value="routes.settings" />}
          icon={<SettingsIcon />}
        />
      ) : null}
    </BottomNavigation>
  );
}

export default BottomNav;
