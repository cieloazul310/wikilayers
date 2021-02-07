import * as React from 'react';
import Container, { ContainerProps } from '@material-ui/core/Container';
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
  children: ContainerProps['children'];
}

function PageContainer({ children }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm" disableGutters>
        {children}
      </Container>
    </div>
  );
}

export default PageContainer;
