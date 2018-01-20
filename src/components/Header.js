import React from 'react';
import Place from 'material-ui/svg-icons/maps/place';
import Search from 'material-ui/svg-icons/action/search';
import Settings from 'material-ui/svg-icons/action/settings';
import Description from 'material-ui/svg-icons/action/description';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

export default class Header extends React.Component {

  render() {
    return (
      <BottomNavigation
        selectedIndex={
          this.props.router.location.pathname === '/map' ? 0 :
          this.props.router.location.pathname === '/settings' ? 3 : 1
        }
      >
        <BottomNavigationItem
          label="地図"
          icon={<Place />}
          onClick={() => this.props.onMenuClick('/map')}
        />
        <BottomNavigationItem
          label="探す"
          icon={<Search />}
          onClick={() => this.props.onMenuClick('/')}
        />
        <BottomNavigationItem
          label="記事"
          icon={<Description />}
          onClick={() => this.props.onMenuClick('/')}
        />
        <BottomNavigationItem
          label="設定"
          icon={<Settings />}
          onClick={() => this.props.onMenuClick('/settings')}
        />
      </BottomNavigation>
    );
  }
}
