import React from 'react';
import PropTypes from 'prop-types';

import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import LocationOn from 'material-ui/svg-icons/communication/location-on';
import LocationOff from 'material-ui/svg-icons/communication/location-off';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import { grey500, grey300 } from 'material-ui/styles/colors';

import commonStyles from '../../commonStyles';

const iconButtonElement = (
  <IconButton
    touch={true}
  >
    <MoreVertIcon color={grey500} />
  </IconButton>
);

const FeatureList = ({ features, onFeatureClick, toggleFeature, onVisitClick, onRemoveClick, moveToArticle }) => (
  <div>
  {
    features.filter(feature => !feature.get('removed')).length === 0 ? <div /> :
        <List>
          <Subheader>アイテム</Subheader>
          {
            features.map(feature => feature)
                    .sort((a, b) => b.getId() - a.getId())
                    .map((feature, index) => (
              <ListItem
                key={index}
                primaryText={feature.get('name')}
                leftIcon={
                  feature.get('visibility') ?
                  <LocationOn style={{fill: feature.get('selected') ? 'red' : commonStyles.pallete.primary2Color}}/> :
                  <LocationOff style={{fill: grey300}} />
                }
                onClick={() => onFeatureClick(feature)}
                rightIconButton={
                  <IconMenu
                    iconButtonElement={iconButtonElement}
                    targetOrigin={{ vertical: 'top', horizontal: 'right'}}
                  >
                    <MenuItem
                      onClick={() => toggleFeature(feature)}
                    >
                      {feature.get('visibility') ? '表示中' : '非表示'}
                    </MenuItem>
                    <MenuItem
                      onClick={() => onVisitClick(feature)}
                    >
                      地図で見る
                    </MenuItem>
                    <MenuItem
                      onClick={() => moveToArticle(feature)}
                    >
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

FeatureList.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  onFeatureClick: PropTypes.func.isRequired,
  toggleFeature: PropTypes.func.isRequired,
  onVisitClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  moveToArticle: PropTypes.func.isRequired,
};

export default FeatureList;
