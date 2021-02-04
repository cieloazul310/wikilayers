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

import { Translate } from 'react-redux-i18n';

const iconButtonElement = (
  <IconButton touch={true}>
    <MoreVertIcon color={grey500} />
  </IconButton>
);

const FeatureList = ({
  features,
  onFeatureClick,
  toggleFeature,
  onVisitClick,
  onRemoveClick,
  moveToArticle
}) => (
  <div>
    {features.length === 0 ? (
      <div />
    ) : (
      <List>
        <Subheader>
          <Translate value="features.title" />
        </Subheader>
        {features.sort((a, b) => b.id - a.id).map((feature, index) => (
          <ListItem
            key={index}
            primaryText={feature.properties.name}
            leftIcon={
              feature.properties.visibility ? (
                <LocationOn
                  style={{
                    fill: feature.properties.selected
                      ? 'red'
                      : commonStyles.pallete.primary2Color
                  }}
                />
              ) : (
                <LocationOff style={{ fill: grey300 }} />
              )
            }
            onClick={() => onFeatureClick(feature)}
            rightIconButton={
              <IconMenu
                iconButtonElement={iconButtonElement}
                targetOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem
                  primaryText={
                    feature.properties.visibility ? (
                      <Translate value="features.visible" />
                    ) : (
                      <Translate value="features.invisible" />
                    )
                  }
                  onClick={() => toggleFeature(feature)}
                />

                <MenuItem
                  primaryText={<Translate value="features.view" />}
                  onClick={() => onVisitClick(feature)}
                />
                <MenuItem
                  primaryText={<Translate value="features.read" />}
                  onClick={() => moveToArticle(feature)}
                />
                <MenuItem
                  primaryText={<Translate value="features.remove" />}
                  onClick={() => onRemoveClick(feature)}
                />
              </IconMenu>
            }
          />
        ))}
      </List>
    )}
  </div>
);

FeatureList.propTypes = {
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
  onFeatureClick: PropTypes.func.isRequired,
  toggleFeature: PropTypes.func.isRequired,
  onVisitClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  moveToArticle: PropTypes.func.isRequired
};

export default FeatureList;
