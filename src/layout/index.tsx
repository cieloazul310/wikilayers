import * as React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Drawer from './Drawer';
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
      width: ({ drawer }) => (drawer ? 280 : 0),
      maxHeight: '100vh',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      background: theme.palette.background.paper,
      transition: theme.transitions.create('width'),
      boxShadow: theme.shadows[2],
      paddingBottom: 56,
    },
    content: {
      display: 'flex',
      flexGrow: 1,
      paddingBottom: 56,
      transition: theme.transitions.create('width'),
    },
    bottomNav: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      boxShadow: theme.shadows[2],
      zIndex: theme.zIndex.appBar,
    },
  })
);

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const { fetchStatus } = useAppState();
  const [drawer, setDrawer] = React.useState(true);
  const classes = useStyles({ drawer });
  const _toggleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <div className={classes.root}>
      <div className={classes.drawer}>
        <Drawer toggleDrawer={_toggleDrawer} />
      </div>
      <div className={classes.content}>{children}</div>
      <div className={classes.progress}>{fetchStatus === 'fetching' ? <LinearProgress color="secondary" /> : null}</div>
      <div className={classes.bottomNav}>
        <BottomNav />
      </div>
    </div>
  );
}

export default Layout;
