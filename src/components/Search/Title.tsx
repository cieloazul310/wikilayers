import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import WikiLayersTitle from '../WikiLayersTitle';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(6, 0),
    },
  })
);

function Title(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <WikiLayersTitle variant="h2" />
    </div>
  );
}

export default Title;
