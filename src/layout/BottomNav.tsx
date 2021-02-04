import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { MapIcon, SearchIcon, ReadIcon, SettingsIcon } from '../icons';
import { useIsMobile } from '../utils/useIsMobile';

function pathnameToValue(pathname: string) {
  if (pathname === '/') return 'map';
  if (pathname === '/search') return 'search';
  if (pathname === '/article') return 'article';
  if (pathname === '/settings') return 'settings';
  return null;
}

function BottomNav(): JSX.Element {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  return (
    <BottomNavigation value={pathnameToValue(pathname)} showLabels>
      <BottomNavigationAction component={Link} to="/" value="map" label="地図" icon={<MapIcon />} />
      {isMobile ? <BottomNavigationAction component={Link} to="/search" value="search" label="探す" icon={<SearchIcon />} /> : null}
      <BottomNavigationAction component={Link} to="/article" value="article" label="読む" icon={<ReadIcon />} />
      {isMobile ? <BottomNavigationAction component={Link} to="/settings" value="settings" label="設定" icon={<SettingsIcon />} /> : null}
    </BottomNavigation>
  );
}

export default BottomNav;
