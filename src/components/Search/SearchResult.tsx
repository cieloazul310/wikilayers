import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Snackbar from '../Snackbar';
import { useAppState, useDispatch } from '../../utils/AppStateContext';
import { AddToMapIcon } from '../../icons';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
);

function SearchResult(): JSX.Element | null {
  const classes = useStyles();
  const { page, features, fetchTitle } = useAppState();
  const dispatch = useDispatch();
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const isExist = new Set(features.map((feature) => feature.page.pageid)).has(page?.pageid ?? 0);

  const onAddButtonClick = () => {
    if (isExist) return;
    if (page && fetchTitle) {
      dispatch({
        type: 'ADD_FEATURE',
        feature: {
          page,
          title: fetchTitle,
        },
      });
      setSnackbarOpen(true);
    }
  };
  const onClose = () => {
    dispatch({ type: 'SET_PAGE', page: null });
  };
  const handleSnackbarClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return page ? (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        {page.title}
      </Typography>
      <Typography variant="body2" paragraph>
        {page.extract.length > 140 ? `${page.extract.slice(0, 140)}...` : page.extract}
      </Typography>
      <div>
        <Button
          variant="contained"
          color={!isExist && page.coordinates ? 'primary' : 'default'}
          disabled={!page.coordinates || isExist}
          startIcon={<AddToMapIcon />}
          onClick={onAddButtonClick}
        >
          地図に追加
        </Button>{' '}
        <Button variant="contained" color="default" disableElevation onClick={onClose}>
          閉じる
        </Button>
      </div>
      <Snackbar message={`${page.title}を追加しました`} open={snackbarOpen} onClose={handleSnackbarClose} />
    </div>
  ) : null;
}

export default SearchResult;
