/**
 * ************************************
 *
 * @module  GamesTable.jsx
 * @author Timothy Mai
 * @date 1/3/20
 * @description filters and displays GameListings
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';
import GameListing from './GameListing';

/*
Instructions:
Upon the completion of the games data download, a listing of games should be displayed on screen.
The order of the listing should be determined by the `Order` field in the games data.
*/

function GamesTable(props) {
  /* props contains an object with the following basic structure:
  const gamesData = {
      2: {
        ID: 1,
        name: 'World of Warcraft',
        supportsAddons: true,
        supportsVoice: false,
        slug: 'wow',
        gameFiles: ['file1', 'file2'],
        categorySections: ['cat1'],
      },
      3: {
        ID: 10,
        name: 'Coding Boi',
        supportsAddons: false,
        supportsVoice: true,
        slug: 'cbi',
        gameFiles: ['file1', 'file2'],
        categorySections: [],
      },
    };
  */

  // pull out game data from props
  const { gamesData } = props;

  // sort the data by "Order" property
  // note: need to convert "Order" to number to be able to sort correctly
  const gameOrderStrings = Object.keys(gamesData);
  const gameOrderNums = gameOrderStrings.map((numStr) => parseInt(numStr, 10));
  const sortedGameOrderNums = gameOrderNums.sort((a, b) => a - b);

  // filter games by search parameters - REMEMBER TO DO THIS

  // create an instance of GameListing for each game
  const gameListings = sortedGameOrderNums.map((gameOrderNum) => {
    const game = gamesData[gameOrderNum];
    return (
      <GameListing
        ID={game.ID}
        name={game.name}
        supportsAddons={game.supportsAddons}
        supportsVoice={game.supportsVoice}
        slug={game.slug}
        gameFiles={game.gameFiles}
        categorySections={game.categorySections}
      />
    );
  });

  return (
    <div>
      {gameListings}
    </div>
  );
}

GamesTable.propTypes = {
  gamesData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default GamesTable;
