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
    let gameData;

    // after component mounts, download the game data
    fetch('games.json')
      .then((response) => response.json())
      .then((data) => {
        gameData = data;
        console.log(gameData);
      });


  }

  render() {
    return (
      <div>
        <h1>
          Downloading game data...
        </h1>
      </div>
    );
  }
}

// use fetch/axios to get json data from games.json

// https://create-react-app.dev/docs/fetching-data-with-ajax-requests
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://github.com/axios/axios

export default LoadingPage;
