/**
 * ************************************
 *
 * @module  App.jsx
 * @author Timothy Mai
 * @date 12/31/19
 * @description outer container of app
 *
 * ************************************
 */

import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import GameListing from './components/GameListing';
import GamesTable from './components/GamesTable';


function App() {

  const gamesData = {
    4: {
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

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <p>
        yeet
      </p>

      {/* <GameListing ID={1} name="swaghi" supportsAddons supportsVoice={false} slug="wow" gameFiles={['yo', 'eyy']} categorySections={[]} /> */}
      {/* <GameListing ID={10} name="swaghi2" supportsAddons supportsVoice={false} slug="wow" gameFiles={['yo', 'eyy']} categorySections={[]} /> */}

      <GamesTable gamesData={gamesData} />

    </div>
  );
}

export default App;
