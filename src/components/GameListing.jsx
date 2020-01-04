/**
 * ************************************
 *
 * @module  GameListing.jsx
 * @author Timothy Mai
 * @date 1/2/20
 * @description displays game information
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';
import ExtendedGameDetails from './ExtendedGameDetails';

/*
Component must show the following data
- Game icon
- Game name
- Whether the game supports addons
- Whether the game supports voice
*/

class GameListing extends React.Component {
  /* props contains the following:
  - ID (number - used to find the correct image file name)
  - name (string)
  - supportsAddons (boolean)
  - supportsVoice (boolean)
  - slug (string)
  - gameFiles (array of objects)
  - categorySections (array of objects)
  */

  /*
  GameListing will contain the ExtendedGameDetails component,
  which will be rendered if detailsShown is true
  */

  constructor(props) {
    super(props);

    this.state = {
      detailsShown: false, // see README for reasoning behind using local state here
    };

    this.toggleDetailsButton = this.toggleDetailsButton.bind(this);
  }

  toggleDetailsButton() {
    this.setState((state) => ({
      detailsShown: !state.detailsShown,
    }));
  }

  render() {
    const {
      ID,
      name,
      supportsAddons,
      supportsVoice,
      slug,
      gameFiles,
      categorySections,
    } = this.props;

    const { detailsShown } = this.state;

    // determine the correct image to display based on ID
    const gameLogo = require(`../../public/images/${ID}.png`);

    return (
      <div>
        <img src={gameLogo} alt="game logo" />
        <h4>{name}</h4>
        <p>
          Supports Add-Ons:
          {' '}
          {supportsAddons ? 'Yes' : 'No'}
        </p>

        <p>
          Supports Voice:
          {' '}
          {supportsVoice ? 'Yes' : 'No'}
        </p>

        <button onClick={this.toggleDetailsButton} type="button">
          {detailsShown ? 'Hide Details' : 'Show Details'}
        </button>

        {detailsShown && (
          <ExtendedGameDetails
            slug={slug}
            gameFiles={gameFiles}
            categorySections={categorySections}
          />
        )}
      </div>
    );
  }
}

GameListing.propTypes = {
  ID: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  supportsAddons: PropTypes.bool.isRequired,
  supportsVoice: PropTypes.bool.isRequired,
  slug: PropTypes.string.isRequired,
  gameFiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  categorySections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GameListing;
