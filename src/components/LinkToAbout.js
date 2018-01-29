import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../img/icon48.png';

const LinkToAbout = () => (
  <div
    style={{
      marginLeft: '.3em',
      padding: '2em .5em',
    }}
  >
    <Link
      to={'/about'}
      style={{
        color: 'black',
        textDecoration: 'none'
      }}
    >
      <img
        src={Icon}
        alt="logo"
        style={{
          height: '1.5em',
          transform: 'translate(0, .3em)',
          marginRight: '.5em'
        }}
      />
      WikiLayersについて
    </Link>
  </div>
);

export default LinkToAbout;
