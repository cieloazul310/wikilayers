import React from 'react';
import PropTypes from 'prop-types';

import Subheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LocationOn from '@material-ui/icons/LocationOn';
import LocationOff from '@material-ui/icons/LocationOff';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import grey from '@material-ui/core/colors/grey';

import commonStyles from '../../commonStyles';

import { Translate } from 'react-redux-i18n';

const iconButtonElement = (
  <IconButton touch={true}>
    <MoreVertIcon color={grey[500]} />
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
                <LocationOff style={{ fill: grey[300] }} />
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
