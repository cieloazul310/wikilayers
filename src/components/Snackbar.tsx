import * as React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

interface Props {
  message: string;
  open: boolean;
  onClose: (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => void;
}

function MySnackbar({ message, open, onClose }: Props) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      message={message}
      action={
        <Button color="secondary" size="small" onClick={onClose}>
          OK
        </Button>
      }
    />
  );
}

export default MySnackbar;
