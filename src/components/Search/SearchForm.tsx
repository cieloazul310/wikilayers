import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useDispatch } from '../../utils/AppStateContext';
import { fetchPages } from '../../utils/fetchPages';
import { SearchIcon } from '../../icons';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      paddingLeft: 10,
    },
    input: {
      flexGrow: 1,
    },
    iconButton: {
      padding: 10,
    },
  })
);

function SearchForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('');

  const _onChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.currentTarget.value);
  }
  const _onSubmit = () => {
    fetchPages(title, dispatch);
  };
  const _onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && title !== '') {
      _onSubmit();
    }
  }

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Wikipedia"
        inputProps={{ 'aria-label': 'search wikipedia' }}
        value={title}
        onChange={_onChangeForm}
        onKeyPress={_onKeyPress}
      />
      <Tooltip title="検索">
        <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={_onSubmit}>
          <SearchIcon />
        </IconButton>
      </Tooltip>
    </Paper>
  );
}

export default SearchForm;
