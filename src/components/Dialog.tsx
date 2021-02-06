import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

type Props = {
  variant?: 'text' | 'content';
  text?: string;
  content?: React.ReactNode;
  actionButton: React.ReactNode;
  dialogHandler: (open: boolean) => () => void;
} & DialogProps;

function MyDialog({ variant, text, content, open, fullWidth, maxWidth, actionButton, dialogHandler }: Props): JSX.Element {
  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      onClose={dialogHandler(false)}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogContent>{variant === 'text' ? <DialogContentText>{text}</DialogContentText> : content}</DialogContent>
      <DialogActions>
        <Button onClick={dialogHandler(false)} color="primary">
          閉じる
        </Button>
        {actionButton}
      </DialogActions>
    </Dialog>
  );
}

MyDialog.defaultProps = {
  variant: 'text',
  text: undefined,
  content: undefined,
};

export default MyDialog;
