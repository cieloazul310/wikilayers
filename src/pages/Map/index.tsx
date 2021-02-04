import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MapApp from './MapApp';
import WikiMapInfo from './MapInfo';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
    },
    info: {
      position: 'fixed',
      top: theme.spacing(1),
      right: theme.spacing(1),
    },
  })
);

function MapPage(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MapApp />
      <div className={classes.info}>
        <WikiMapInfo />
      </div>
    </div>
  );
}

export default MapPage;
