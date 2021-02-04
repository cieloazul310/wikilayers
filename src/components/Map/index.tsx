import { makeStyles, createStyles } from '@material-ui/core/styles';
import WikiMapApp from '../../containers/Map/WikiMapApp';
import WikiMapInfo from '../../containers/Map/WikiMapInfo';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
}));

function MapPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <WikiMapApp />
      <WikiMapInfo />
    </div>
  );
}

export default MapPage;
