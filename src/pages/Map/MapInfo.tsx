import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { toStringXY } from 'ol/coordinate';
import { useMap } from '../../utils/MapContext';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      maxWidth: 240,
    },
  })
);

function MapInfo(): JSX.Element {
  const classes = useStyles();
  const map = useMap();
  const view = map.getView();
  const center = view.getCenter();
  const zoom = view.getZoom();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          zoom: {zoom?.toFixed(4)}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          center: {center ? toStringXY(center) : null}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MapInfo;
