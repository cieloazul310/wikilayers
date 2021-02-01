import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from './Snackbar';
import Modal from './Modal';
import { useAppState, useDispatch } from '../utils/AppStateContext';
import { PageFeature } from '../types';
import { MapIcon } from '../icons';

function FeaturesList() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedFeature, setSelectedFeature] = React.useState<null | PageFeature>(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [modalOpen, setModalOpen] = React.useState(false);
  const open = Boolean(anchorEl);
  const { features, page } = useAppState();
  const dispatch = useDispatch();

  const _handleClick = (feature: PageFeature) => (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setSelectedFeature(feature);
  };
  const _handleClose = () => {
    setAnchorEl(null);
    setSelectedFeature(null);
  };
  const _handleModalOpen = (open: boolean) => () => {
    setModalOpen(open);
  };
  const _onClick = (feature: PageFeature) => () => {
    dispatch({ type: 'SET_PAGE', page: feature.page });
  };
  const _deleteFeature = () => {
    dispatch({ type: 'DELETE_FEATURE', feature: selectedFeature });
    setSnackbarMessage(`${selectedFeature.title}を削除しました`);
    setSnackbarOpen(true);
    _handleClose();
  };
  const _modalAction = () => {
    dispatch({ type: 'CLEAR_FEATURES' });
    setModalOpen(false);
  };
  const _handleSnackbarClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <List subheader={<ListSubheader>アイテム</ListSubheader>}>
      {features.length ? (
        <ListItem button dense onClick={_handleModalOpen(true)}>
          <ListItemText primary="全て消去" />
        </ListItem>
      ) : null}
      {features.map((feature, index) => (
        <ListItem key={index} button onClick={_onClick(feature)}>
          <ListItemIcon>
            <MapIcon color={feature.page.title === page?.title ? 'error' : 'primary'} />
          </ListItemIcon>
          <ListItemText primary={feature.title} />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={_handleClick(feature)}>
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      <Menu anchorEl={anchorEl} open={open} onClose={_handleClose}>
        <MenuItem onClick={_deleteFeature}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          削除
        </MenuItem>
      </Menu>
      <Snackbar message={snackbarMessage} open={snackbarOpen} onClose={_handleSnackbarClose} />
      <Modal
        open={modalOpen}
        modalHandler={_handleModalOpen}
        onClose={_handleModalOpen(false)}
        actionButton={
          <Button variant="contained" color="primary" onClick={_modalAction}>
            削除
          </Button>
        }
      >
        <Typography>アイテムを全て削除しますか？</Typography>
      </Modal>
    </List>
  );
}

export default FeaturesList;
