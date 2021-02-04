import * as React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Accodrdion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useAppState } from '../../utils/AppStateContext';

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      maxWidth: 280,
    },
  })
);

function MapInfo(): JSX.Element | null {
  const classes = useStyles();
  const { page } = useAppState();

  return page ? (
    <Paper className={classes.card}>
      <Accodrdion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="mapinfo" id="mapinfo-header">
          <Typography>{page.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">{page.extract.length > 140 ? `${page.extract.slice(0, 140)}...` : page.extract}</Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button variant="contained" color="primary" component={Link} to="/article">
            記事を読む
          </Button>
        </AccordionActions>
      </Accodrdion>
    </Paper>
  ) : null;
}

export default MapInfo;
