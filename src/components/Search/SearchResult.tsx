import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useAppState, useDispatch } from '../../utils/AppStateContext';
import { pageToFeature } from '../../utils/pageToFeature';
import { AddToMapIcon } from '../../icons';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
);

function SearchResult() {
  const classes = useStyles();
  const { page, features } = useAppState();
  const dispatch = useDispatch();
  
  const isExist = new Set(features.map((feature) => feature.properties.pageid)).has(page?.pageid ?? 0);

  const _onAddButtonClick = () => {
    if (isExist) return;
    dispatch({ type: 'ADD_FEATURE', feature: pageToFeature(page) });
  }

  return page ? (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        {page.title}
      </Typography>
      <Typography variant="body2" paragraph>
        {page.extract.slice(0, 140)}
      </Typography>
      <div>
        <Button
          variant="contained"
          color={!isExist && page.coordinates ? 'primary' : 'default'}
          disabled={!page.coordinates || isExist}
          startIcon={<AddToMapIcon />}
          onClick={_onAddButtonClick}
        >
          地図に追加
        </Button>
      </div>
    </div>
  ) : null;
}

export default SearchResult;
