import React from 'react';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

import { grey400 } from 'material-ui/styles/colors';

const iconButtonElement = (
  <IconButton
    touch={true}
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const FeatureList = ({ features, handleVisibility, onVisitClick, onRemoveClick }) => (
  <div>
  {
    features.filter(feature => !feature.get('removed')).length === 0 ? <div /> :
    <List>
      <Subheader>マーカー</Subheader>
      {
        features.filter(feature => !feature.get('removed'))
                .map((feature, index) => (
          <ListItem
            key={index}
            primaryText={feature.get('name')}
            secondaryTextLines={2}
            leftIcon={
              feature.get('visibility') ? <Visibility /> :    <VisibilityOff style={{fill: 'silver'}} />
            }
            rightIconButton={
              <IconMenu
                iconButtonElement={iconButtonElement}
                targetOrigin={{ vertical: 'top', horizontal: 'right'}}
              >
                <MenuItem
                  onClick={() => handleVisibility(feature)}
                >
                  {feature.get('visibility') ? '表示中' : '非表示'}
                </MenuItem>
                <MenuItem
                  onClick={() => onVisitClick(feature)}
                >
                  地図で見る
                </MenuItem>
                <MenuItem>
                  記事を読む
                </MenuItem>
                <MenuItem
                  onClick={() => onRemoveClick(feature)}
                >
                  削除
                </MenuItem>
              </IconMenu>
            }
          />
        ))
      }
    </List>
  }
  </div>
);

export default FeatureList;
