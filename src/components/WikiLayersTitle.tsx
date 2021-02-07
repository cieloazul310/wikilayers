import * as React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontWeight: 100,
      fontFamily: 'sans-serif',
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
  })
);

function WikiLayersTitle({ variant }: TypographyProps): JSX.Element {
  const classes = useStyles();
  return (
    <Typography className={classes.title} align="center" variant={variant} color="primary">
      WikiLayers
    </Typography>
  );
}

export default WikiLayersTitle;
