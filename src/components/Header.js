import React from 'react';
import Place from 'material-ui/svg-icons/maps/place';
import Search from 'material-ui/svg-icons/action/search';
import Settings from 'material-ui/svg-icons/action/settings';
import Description from 'material-ui/svg-icons/action/description';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

import { Translate } from 'react-redux-i18n';

export default class Header extends React.Component {

  render() {
    return (
      <BottomNavigation
        selectedIndex={
          this.props.router.location.pathname === '/map' ? 0 :
          this.props.router.location.pathname === '/' ? 1 :
          this.props.router.location.pathname === '/article' ? 2 :
          this.props.router.location.pathname === '/settings' ? 3 : null
        }
      >
        <BottomNavigationItem
          label={<Translate value="routes.map" />}
          icon={<Place />}
          onClick={() => this.props.onMenuClick('/map')}
        />
        <BottomNavigationItem
          label={<Translate value="routes.search" />}
          icon={<Search />}
          onClick={() => this.props.onMenuClick('/')}
        />
        <BottomNavigationItem
          label={<Translate value="routes.read" />}
          icon={<Description />}
          onClick={() => this.props.onMenuClick('/article')}
        />
        <BottomNavigationItem
          label={<Translate value="routes.settings" />}
          icon={<Settings />}
          onClick={() => this.props.onMenuClick('/settings')}
        />
      </BottomNavigation>
    );
  }
}
