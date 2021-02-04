import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useAppState, useDispatch } from '../../utils/AppStateContext';
import fetchPages from '../../utils/fetchPages';
import { Search } from '../../types';

function SearchedItems(): JSX.Element | null {
  const { searchedItems } = useAppState();
  const dispatch = useDispatch();
  const onClick = (searchItem: Search) => () => {
    fetchPages(searchItem.title, dispatch);
  };
  return searchedItems.length ? (
    <List subheader={<ListSubheader>検索結果</ListSubheader>}>
      {searchedItems.map((item) => (
        <ListItem key={item.title} button dense onClick={onClick(item)}>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  ) : null;
}

export default SearchedItems;
