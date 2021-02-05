import * as React from 'react';
import Container, { ContainerProps } from '@material-ui/core/Container';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import useIsMobile from '../utils/useIsMobile';

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
  disableGutters?: boolean;
}

function PageContainer({ children, disableGutters }: Props): JSX.Element {
  const classes = useStyles();
  const isMobile = useIsMobile();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm" disableGutters={disableGutters ?? isMobile}>
        {children}
      </Container>
    </div>
  );
}

PageContainer.defaultProps = {
  disableGutters: undefined,
};

export default PageContainer;
