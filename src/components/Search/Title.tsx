import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(6, 0),
    },
    title: {
      fontSize: theme.typography.h3.fontSize,
      fontWeight: 100,
      textAlign: 'center',
      fontFamily: 'sans-serif',
    },
  })
);

function Title(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>WikiLayers</h1>
    </div>
  );
}

export default Title;
