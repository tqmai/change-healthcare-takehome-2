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
      4: {
        ID: 1,
        name: 'World of Warcraft',
        supportsAddons: true,
        supportsVoice: false,
        slug: 'wow',
        gameFiles: [
          {
            Id: 1,
            FileName: 'file1',
          },
          {
            Id: 2,
            FileName: 'file2',
          },
        ],
        categorySections: [
          {
            ID: 1,
            FileName: 'cat1',
          },
        ],
      },
      3: {
        ID: 10,
        name: 'Coding Boi',
        supportsAddons: false,
        supportsVoice: true,
        slug: 'cbi',
        gameFiles: [
          {
            Id: 1,
            FileName: 'file1',
          },
        ],
        categorySections: [],
      },
    };
  */

  /* props also contains:
  searchQuery (string)
  requireAddOns (boolean)
  requireVoice (boolean)
  */

  // pull out data from props
  const {
    gamesData,
    searchQuery,
    requireAddOns,
    requireVoice,
  } = props;

  // this will be used to make case-insensitive searches
  const lowercaseSearchQuery = searchQuery.toLowerCase();

  // sort the data by "Order" property
  // note: need to convert "Order" to number to be able to sort correctly
  const gameOrderStrings = Object.keys(gamesData);
  const gameOrderNums = gameOrderStrings.map((numStr) => parseInt(numStr, 10));
  const sortedGameOrderNums = gameOrderNums.sort((a, b) => a - b);

  // filter games by search parameters
  // create an instance of GameListing for each non-filtered game
  const gameListings = [];

  sortedGameOrderNums.forEach((gameOrderNum) => {
    const {
      ID,
      name,
      supportsAddons,
      supportsVoice,
      slug,
      gameFiles,
      categorySections,
    } = gamesData[gameOrderNum];

    // this will be used to make case-insensitive searches
    const lowercaseName = name.toLowerCase();

    // if game does not meet conditions, then filter it out
    if (lowercaseName.indexOf(lowercaseSearchQuery) === -1) {
      return;
    }
    if (requireAddOns && !supportsAddons) {
      return;
    }
    if (requireVoice && !supportsVoice) {
      return;
    }

    gameListings.push(
      <GameListing
        key={ID.toString()}
        ID={ID}
        name={name}
        supportsAddons={supportsAddons}
        supportsVoice={supportsVoice}
        slug={slug}
        gameFiles={gameFiles}
        categorySections={categorySections}
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
  searchQuery: PropTypes.string.isRequired,
  requireAddOns: PropTypes.bool.isRequired,
  requireVoice: PropTypes.bool.isRequired,
};

export default GamesTable;
