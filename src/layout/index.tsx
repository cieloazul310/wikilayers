import * as React from 'react';
import Drawer from './Drawer';
import BottomNav from './BottomNav';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface StylesProps {
  drawer: boolean;
}

const useStyles = makeStyles<Theme, StylesProps>((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
    },
    drawer: {
      width: ({ drawer }) => (drawer ? 240 : 0),
      background: theme.palette.background.paper,
      transition: theme.transitions.create('width'),
      boxShadow: theme.shadows[2],
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
    },
  })
);

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const [drawer, setDrawer] = React.useState(true);
  const classes = useStyles({ drawer });
  const _toggleDrawer = () => {
    setDrawer(!drawer);
  }
  return (
    <div className={classes.root}>
      <div className={classes.drawer}>
        <Drawer toggleDrawer={_toggleDrawer} />
      </div>
      <div className={classes.content}>
        {children}
      </div>
      <div className={classes.bottomNav}>
        <BottomNav />
      </div>
    </div>
  );
}

export default Layout;
