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
    };
  }

  componentDidMount() {
    const { gamesData } = this.state;

    // after component mounts, download the game data
    fetch('games.json')
      .then((response) => response.json())
      .then((data) => {
        const rawGameData = data.data;
        // console.log('rawGameData', rawGameData);

        /*
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
            Name: 'cat1',
          },
        ],
        */

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

          console.log(gamesData);

          this.setState({
            gamesData,
          });
        });
      });
  }

  render() {
    const { gamesData } = this.state;

    return (
      <div>
        <h1>
          Downloading game data...
        </h1>

        <h2>
          Games downloaded:
          {' '}
          {Object.keys(gamesData).length}
        </h2>
      </div>
    );
  }
}

// use fetch/axios to get json data from games.json

// https://create-react-app.dev/docs/fetching-data-with-ajax-requests
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://github.com/axios/axios

export default LoadingPage;
