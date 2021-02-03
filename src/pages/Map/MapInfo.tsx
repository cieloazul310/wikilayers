import * as React from 'react';
import { Translate } from 'react-redux-i18n';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { toStringXY } from 'ol/coordinate';
import { useMap } from '../../utils/MapContext';

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      maxWidth: 240,
    },
  })
);

interface Props {

}

function MapInfo() {
  const classes = useStyles();
  const map = useMap();
  const view = map.getView();
  const center = view.getCenter();
  const zoom = view.getZoom();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          zoom: {zoom.toFixed(4)}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          center: {toStringXY(center)}
        </Typography>
      </CardContent>
      {/*
      <CardHeader
        title={isSelected ? selectedFeature.properties.name : '選択なし'}
        actAsExpander={isSelected}
        showExpandableButton={isSelected}
        textStyle={{ paddingRight: '1em' }}
      />
      <CardContent
        expandable={true}
        hidden={!isSelected}
        style={{
          maxHeight: 100,
          overflowY: 'scroll',
        }}
      >
        {isSelected ? `${selectedFeature.properties.summary.extract}` : ''}
      </CardContent>
      <CardActions expandable={true} hidden={!isSelected}>
        <FlatButton label={<Translate value="card.readMore" />} primary={true} onClick={() => moveToArticle()} />
      </CardActions>*/}
    </Card>
  );
};

export default MapInfo;
