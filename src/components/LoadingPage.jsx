/**
 * ************************************
 *
 * @module  LoadingPage.js
 * @author Timothy Mai
 * @date 1/4/20
 * @description component displayed while fetching data
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';

/* Instructions:
When a user navigates to the app for the first time, the app should download the games data (from
games.json). While the game data is being fetched, an indication of progress should be displayed.
*/

class LoadingPage extends React.Component {
  componentDidMount() {
    const {
      gamesData,
      addGameData,
      setTotalNumOfGames,
      toggleLoadingState,
    } = this.props;

    // after component mounts, download the game data
    fetch('games.json')
      .then((response) => response.json())
      .then((data) => {
        // parse through the data and save the relevant info
        const rawGameData = data.data;

        // this is to determine the total number of games to be downloaded
        setTotalNumOfGames(rawGameData.length);

        rawGameData.forEach((game) => {
          gamesData[game.ID] = {
            ID: game.ID,
            name: game.Name,
            supportsAddons: game.SupportsAddons,
            supportsVoice: game.SupportsVoice,
            slug: game.Slug,
            gameFiles: [],
            categorySections: [],
          };

          game.GameFiles.forEach((file) => {
            gamesData[game.ID].gameFiles.push({
              ID: file.Id,
              FileName: file.FileName,
            });
          });

          game.CategorySections.forEach((cat) => {
            gamesData[game.ID].categorySections.push({
              ID: cat.ID,
              Name: cat.Name,
            });
          });

          // after you parse the info for every game, update the state so that you can
          // indicate how many games have been processed
          addGameData(gamesData);
        });

        // after all games have been parsed, toggle the loading state
        toggleLoadingState();
      });
  }

  render() {
    const {
      gamesData,
      totalNumOfGames,
    } = this.props;

    return (
      <div>
        <h1>
          Downloading game data...
        </h1>

        <h2>
          Games downloaded:
          {' '}
          {Object.keys(gamesData).length}
          /
          {totalNumOfGames}
        </h2>
      </div>
    );
  }
}

LoadingPage.propTypes = {
  gamesData: PropTypes.objectOf(PropTypes.object).isRequired,
  totalNumOfGames: PropTypes.number.isRequired,
  addGameData: PropTypes.func.isRequired,
  setTotalNumOfGames: PropTypes.func.isRequired,
  toggleLoadingState: PropTypes.func.isRequired,
};

export default LoadingPage;
