import * as React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: theme.spacing(2),
    },
  })
);

interface Props {
  children: React.ReactNode;
}

function PageContainer({ children }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">{children}</Container>
    </div>
  );
}

export default PageContainer;
