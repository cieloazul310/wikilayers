import * as React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
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
import Dialog from './Dialog';
import { useAppState, useDispatch } from '../utils/AppStateContext';
import { useMap } from '../utils/MapContext';
import { PageFeature } from '../types';
import { MapIcon, ReadIcon } from '../icons';

function FeaturesList(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedFeature, setSelectedFeature] = React.useState<null | PageFeature>(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [DialogOpen, setDialogOpen] = React.useState(false);
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
  const handleDialogOpen = (open: boolean) => () => {
    setDialogOpen(open);
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
  const DialogAction = () => {
    dispatch({ type: 'CLEAR_FEATURES' });
    setDialogOpen(false);
    setSnackbarMessage('アイテムを全てを削除しました');
    setSnackbarOpen(true);
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
        <ListItem button dense onClick={handleDialogOpen(true)}>
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
      <Dialog
        text="現在のアイテムを全て消去しますか？"
        open={DialogOpen}
        dialogHandler={handleDialogOpen}
        onClose={handleDialogOpen(false)}
        actionButton={
          <Button variant="contained" color="primary" onClick={DialogAction}>
            実行
          </Button>
        }
      />
    </List>
  );
}

export default FeaturesList;
