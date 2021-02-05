import * as React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: theme.typography.h3.fontSize,
      fontWeight: 100,
      textAlign: 'center',
      fontFamily: 'sans-serif',
    },
  })
);

function StartScreen(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.title}>WikiLayers</h1>
        <LinearProgress />
      </div>
    </div>
  );
}

export default StartScreen;
