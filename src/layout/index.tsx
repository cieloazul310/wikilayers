import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import DrawerInner from './Drawer';
import BottomNav from './BottomNav';
import { useAppState } from '../utils/AppStateContext';

interface StylesProps {
  drawer: boolean;
}

const useStyles = makeStyles<Theme, StylesProps>((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
    },
    progress: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: 280,
        flexShrink: 0,
        //paddingBottom: 56,
      },
    },
    drawerPaper: {
      width: 280,
      paddingBottom: 56,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      paddingBottom: 56,
      transition: theme.transitions.create('width'),
    },
    bottomNav: {
      position: 'fixed',
      bottom: 0,
      right: 0,
      width: '100%',
      boxShadow: theme.shadows[2],
      zIndex: theme.zIndex.appBar,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${280}px)`,
      },
    },
  })
);

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const { fetchStatus } = useAppState();
  const [drawer, setDrawer] = React.useState(false);
  const classes = useStyles({ drawer });
  const _toggleDrawer = () => {
    setDrawer(!drawer);
  };
  const _handleDrawer = (open: boolean) => () => {
    setDrawer(open);
  };
  return (
    <div className={classes.root}>
      <Hidden xsDown implementation="css">
        <nav className={classes.drawer}>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerInner toggleDrawer={_toggleDrawer} />
          </Drawer>
        </nav>
      </Hidden>
      <div className={classes.content}>
        {children}
        <div className={classes.bottomNav}>
          <BottomNav />
        </div>
      </div>
      <div className={classes.progress}>{fetchStatus === 'fetching' ? <LinearProgress color="secondary" /> : null}</div>
    </div>
  );
}

export default Layout;
