import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';

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
        color: '#12578e',
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
      <Translate value="routes.about" />
    </Link>
  </div>
);

export default LinkToAbout;
