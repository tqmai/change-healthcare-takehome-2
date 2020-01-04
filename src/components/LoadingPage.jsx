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

/* Instructions:
When a user navigates to the app for the first time, the app should download the games data (from
games.json). While the game data is being fetched, an indication of progress should be displayed.
*/

class LoadingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      gamesData: {},
      totalNumOfGames: 0,
    };
  }

  componentDidMount() {
    const { gamesData } = this.state;

    // after component mounts, download the game data
    fetch('games.json')
      .then((response) => response.json())
      .then((data) => {
        // parse through the data and save the relevant info
        const rawGameData = data.data;

        // this is to determine the total number of games to be downloaded
        this.setState({
          totalNumOfGames: rawGameData.length,
        });

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
          this.setState({
            gamesData,
          });
        });
      });
  }

  render() {
    const { gamesData, totalNumOfGames } = this.state;

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

export default LoadingPage;
