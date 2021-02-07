import * as React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import WikiLayersTitle from './WikiLayersTitle';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

function StartScreen(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <WikiLayersTitle variant="h2" />
        <LinearProgress />
      </div>
    </div>
  );
}

export default StartScreen;
