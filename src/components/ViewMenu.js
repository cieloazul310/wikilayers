import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

const ViewMenu = ({ filter, text, icon, style, onClick }) => (
  <Link
    to={filter}
    onClick={() => {
      onClick(text);
    }}
  >
    <MenuItem
      primaryText={text}
      leftIcon={icon}
    />
  </Link>
);

export default ViewMenu;
