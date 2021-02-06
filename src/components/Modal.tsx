import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal, { ModalProps } from '@material-ui/core/Modal';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      maxWidth: '90vw',
      width: '60%',
      minWidth: 300,
      maxHeight: '90vh',
      overflowY: 'auto',
      padding: theme.spacing(2, 0),
    },
    inner: {
      padding: theme.spacing(2),
    },
    buttons: {
      padding: theme.spacing(2),
      textAlign: 'right',
    },
  })
);

type Props = {
  actionButton: React.ReactNode;
  modalHandler: (open: boolean) => () => void;
} & ModalProps;

function MyModal({ modalHandler, open, onClose, children, actionButton }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={onClose}>
      <Paper className={classes.paper}>
        <div className={classes.inner}>{children}</div>
        <div className={classes.buttons}>
          {actionButton}{' '}
          <Button variant="contained" onClick={modalHandler(false)} disableElevation>
            閉じる
          </Button>
        </div>
      </Paper>
    </Modal>
  );
}

export default MyModal;
