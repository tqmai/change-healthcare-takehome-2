/**
 * ************************************
 *
 * @module  GameDataContainer.jsx
 * @author Timothy Mai
 * @date 1/3/20
 * @description stateful component that renders SearchBar and GamesTable
 *
 * ************************************
 */

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import from child components...
// import TotalsDisplay from '../components/TotalsDisplay.jsx';
// import MarketsContainer from './MarketsContainer.jsx';

import React from 'react';
import SearchBar from '../components/SearchBar';
import GamesTable from '../components/GamesTable';

// // mapStateToProps will take the entire redux store state as its argument
// // technically it's the "state value", not the "store instance", but for now we will call it store for clarity
// const mapStateToProps = store => ({
//   //within mapStateToProps we will return an object that contains all of the data for our component
//   // Each key in the object will become a prop for your actual component
//   // The values in the key will be used to determine if your component needs to re-render
//   totalCards: store.markets.totalCards,
//   totalMarkets: store.markets.totalMarkets
// });

// class MainContainer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="outerBox">
//           <h1 id="header">MegaMarket Loyalty Cards</h1>
//           {/* now we can pass our totalCards and totalMarkets props that we defined above */}
//           <TotalsDisplay totalCards={this.props.totalCards} totalMarkets={this.props.totalMarkets} />
//           <MarketsContainer />
//         </div>
//       </div>
//     )
//   }

// }

class GameDataContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
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
            Name: 'cat1',
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

    return (
      <div>
        <SearchBar />

        <GamesTable gamesData={gamesData} />
      </div>
    );
  }
}

// // connect will always require two arguments
// // but since we are not access mapDispatchToProps we pass null as a second value
// export default connect(mapStateToProps, null)(MainContainer);

export default GameDataContainer;
