import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { useAppState, useDispatch } from '../../utils/AppStateContext';
import { fetchPages } from '../../utils/fetchPages';
import { Search } from '../../types';

function SearchedItems() {
  const { searchedItems } = useAppState();
  const dispatch = useDispatch();
  const _onClick = (searchItem: Search) => () => {
    fetchPages(searchItem.title, dispatch);
  };
  return searchedItems.length ? (
    <List subheader={<ListSubheader>検索結果</ListSubheader>}>
      {searchedItems.map((item, index) => (
        <ListItem key={index} button dense onClick={_onClick(item)}>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  ) : null;
}

export default SearchedItems;