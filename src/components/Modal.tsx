import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Modal, { ModalProps } from '@material-ui/core/Modal';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      minWidth: 300,
      padding: theme.spacing(2, 0)
    },
    inner: {
      padding: theme.spacing(2),
    },
  })
);

type Props = {
  actionButton?: React.ReactNode;
  modalHandler: (open: boolean) => () => void;
} & ModalProps;

function MyModal({ actionButton, modalHandler, children, ...props }: Props) {
  const classes = useStyles();
  return (
    <Modal {...props}>
      <Paper className={classes.paper}>
        <div className={classes.inner}>{children}</div>
        <div className={classes.inner}>
          {actionButton}
          {' '}
          <Button variant="contained" onClick={modalHandler(false)} disableElevation>
            閉じる
          </Button>
        </div>
      </Paper>
    </Modal>
  );
}

export default MyModal;
