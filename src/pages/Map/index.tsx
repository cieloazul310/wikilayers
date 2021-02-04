import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MapApp from './MapApp';
import MapInfo from './MapInfo';
import useGaTrackPage from '../../utils/useGaTrackPage';

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
  const { pathname } = useLocation();
  useGaTrackPage(pathname);
  return (
    <div className={classes.root}>
      <MapApp />
      <div className={classes.info}>
        <MapInfo />
      </div>
    </div>
  );
}

export default MapPage;
