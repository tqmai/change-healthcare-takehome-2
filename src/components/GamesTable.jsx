/**
 * ************************************
 *
 * @module  GamesTable.jsx
 * @author Timothy Mai
 * @date 1/3/20
 * @description displays GameListings
 *
 * ************************************
 */

import React from 'react';

/*
Instructions:
Upon the completion of the games data download, a listing of games should be displayed on screen.
The order of the listing should be determined by the `Order` field in the games data.
*/

class GamesTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {hi: 'hi'}
  }

  render() {
    // access Redux store to get game data

    // sort the data by "Order" property

    // filter games by search parameters

    // create an instance of GameListing for each game

    return (
      <div>
        hi
      </div>
    );
  }
}

export default GamesTable;
