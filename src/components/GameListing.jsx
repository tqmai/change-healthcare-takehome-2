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
  */ 

  /* 
  GameListing will contain the ExtendedGameDetails component,
  which will be rendered if the user chooses to do so
  */

  // add button and toggle functionality

  constructor(props) {
    super(props);
    this.state = {
      detailsShown: false, // UPDATE THIS when adding Redux
    };
  }
  
  render() {
    return (
      <div>
        <p>game listing</p>
        {detailsShown && ExtendedGameDetails}
      </div>
    )
  }

}

export default GameListing;
