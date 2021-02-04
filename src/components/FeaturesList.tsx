import * as React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
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
import PinDropIcon from '@material-ui/icons/PinDrop';
import DeleteIcon from '@material-ui/icons/Delete';
import { fromLonLat } from 'ol/proj';
import Snackbar from './Snackbar';
import Modal from './Modal';
import { useAppState, useDispatch } from '../utils/AppStateContext';
import { useMap } from '../utils/MapContext';
import { PageFeature } from '../types';
import { MapIcon, ReadIcon } from '../icons';

function FeaturesList(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedFeature, setSelectedFeature] = React.useState<null | PageFeature>(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [modalOpen, setModalOpen] = React.useState(false);
  const menuOpen = Boolean(anchorEl);
  const { features, page } = useAppState();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const history = useHistory();
  const map = useMap();

  const handleClick = (feature: PageFeature) => (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setSelectedFeature(feature);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedFeature(null);
  };
  const handleModalOpen = (open: boolean) => () => {
    setModalOpen(open);
  };
  const onClick = (feature: PageFeature) => () => {
    dispatch({ type: 'SET_PAGE', page: feature.page });
  };
  const focusFeature = () => {
    const coordinates = selectedFeature?.page?.coordinates;
    if (coordinates) {
      const coord = coordinates[0];
      map.getView().animate({
        center: fromLonLat([coord.lon, coord.lat]),
        duration: 500,
      });
      handleClose();
      if (pathname !== '/') {
        history.push('/');
      }
    }
  };
  const readPage = () => {
    if (selectedFeature) {
      dispatch({ type: 'SET_PAGE', page: selectedFeature.page });
      handleClose();
      history.push('/article');
    }
  };
  const deleteFeature = () => {
    if (selectedFeature) {
      dispatch({ type: 'DELETE_FEATURE', feature: selectedFeature });
      setSnackbarMessage(`${selectedFeature?.title}を削除しました`);
      setSnackbarOpen(true);
      handleClose();
    }
  };
  const modalAction = () => {
    dispatch({ type: 'CLEAR_FEATURES' });
    setModalOpen(false);
  };
  const handleSnackbarClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <List subheader={<ListSubheader>アイテム</ListSubheader>}>
      {features.length ? (
        <ListItem button dense onClick={handleModalOpen(true)}>
          <ListItemText primary="全て消去" />
        </ListItem>
      ) : null}
      {features.map((feature) => (
        <ListItem key={feature.title} button onClick={onClick(feature)}>
          <ListItemIcon>
            <MapIcon color={feature.page.title === page?.title ? 'error' : 'primary'} />
          </ListItemIcon>
          <ListItemText primary={feature.title} />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={handleClick(feature)}>
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleClose}>
        <MenuItem onClick={focusFeature}>
          <ListItemIcon>
            <PinDropIcon />
          </ListItemIcon>
          地図で見る
        </MenuItem>
        <MenuItem onClick={readPage}>
          <ListItemIcon>
            <ReadIcon />
          </ListItemIcon>
          記事を読む
        </MenuItem>
        <MenuItem onClick={deleteFeature}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          削除
        </MenuItem>
      </Menu>
      <Snackbar message={snackbarMessage} open={snackbarOpen} onClose={handleSnackbarClose} />
      <Modal
        open={modalOpen}
        modalHandler={handleModalOpen}
        onClose={handleModalOpen(false)}
        actionButton={
          <Button variant="contained" color="primary" onClick={modalAction}>
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
