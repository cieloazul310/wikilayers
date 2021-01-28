import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SearchForm from '../components/Search/SearchForm';
import SearchResult from '../components/Search/SearchResult';
import SearchedItems from '../components/Search/SearchedItems';

const useStyles = makeStyles((theme) => createStyles({
  searchBox: {
    padding: theme.spacing(2, 1),
  },
}))

function DrawerSearch() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.searchBox}>
        <SearchForm />
      </div>
      <SearchResult />
      <SearchedItems />
    </div>
  );
}

export default DrawerSearch;
