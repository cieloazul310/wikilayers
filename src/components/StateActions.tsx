import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GetAppIcon from '@material-ui/icons/GetApp';
import RestoreIcon from '@material-ui/icons/Restore';
import Snackbar from './Snackbar';
import Dialog from './Dialog';
import { useGeoJSON, useBlobUrl } from '../utils/exportGeoJSON';
import { useDispatch } from '../utils/AppStateContext';

function StateActions(): JSX.Element {
  const [actionType, setActionType] = React.useState<'reset' | 'download'>('reset');
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [modalOpen, setModalOpen] = React.useState(false);
  const dispatch = useDispatch();
  const geojson = useGeoJSON();
  const downloadUrl = useBlobUrl(geojson);

  const handleModalOpen = (open: boolean) => () => {
    setModalOpen(open);
  };
  const modalAction = () => {
    if (actionType === 'reset') {
      dispatch({ type: 'RESET' });
      window.localStorage.removeItem('wikilayers:AppState');
      window.localStorage.removeItem('wikilayers:ThemeState');
      setSnackbarMessage('設定を初期化しました');
      setSnackbarOpen(true);
    }
    setModalOpen(false);
  };
  const handleSnackbarClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };
  const resetClicked = () => {
    setActionType('reset');
    setModalOpen(true);
  };
  const downloadClicked = () => {
    setActionType('download');
    setModalOpen(true);
  };
  const dialog = (
    <Dialog
      variant={actionType === 'reset' ? 'text' : 'content'}
      open={modalOpen}
      fullWidth={actionType === 'download'}
      maxWidth={actionType === 'download' ? 'sm' : undefined}
      dialogHandler={handleModalOpen}
      onClose={handleModalOpen(false)}
      text={actionType === 'reset' ? '設定を初期化しますか？' : undefined}
      content={
        actionType === 'download' ? (
          <TextField multiline fullWidth rowsMax={20} label="GeoJSON" variant="outlined" value={geojson} />
        ) : undefined
      }
      actionButton={
        actionType === 'reset' ? (
          <Button variant="contained" color="primary" onClick={modalAction}>
            実行
          </Button>
        ) : (
          <Button
            component="a"
            variant="contained"
            color="primary"
            onClick={modalAction}
            startIcon={<GetAppIcon />}
            download
            href={downloadUrl}
          >
            ダウンロード
          </Button>
        )
      }
    />
  );

  return (
    <List subheader={<ListSubheader>機能</ListSubheader>}>
      <ListItem button onClick={downloadClicked}>
        <ListItemIcon>
          <GetAppIcon />
        </ListItemIcon>
        <ListItemText>GeoJSON 形式で出力</ListItemText>
      </ListItem>
      <ListItem button onClick={resetClicked}>
        <ListItemIcon>
          <RestoreIcon />
        </ListItemIcon>
        <ListItemText>設定を初期化する</ListItemText>
      </ListItem>
      <Snackbar message={snackbarMessage} open={snackbarOpen} onClose={handleSnackbarClose} />
      {dialog}
    </List>
  );
}

export default StateActions;
