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

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SearchBar from '../components/SearchBar';
import GamesTable from '../components/GamesTable';

const mapStateToProps = (store) => ({
  gamesData: store.data, // CHECK IF THIS WORKS
  searchQuery: store.search.searchQuery,
  requireAddOns: store.search.requireAddOns,
  requireVoice: store.search.requireVoice,
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchQuery: (query) => dispatch(actions.updateSearchQuery(query)),
  toggleAddOns: () => dispatch(actions.toggleAddOns()),
  toggleVoice: () => dispatch(actions.toggleVoice()),
});

class GameDataContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    /*
    const mapStateToProps = (store) => ({
      gamesData: store.data, // CHECK IF THIS WORKS
      searchQuery: store.search.searchQuery,
      requireAddOns: store.search.requireAddOns,
      requireVoice: store.search.requireVoice,
    });
    
    const mapDispatchToProps = (dispatch) => ({
      updateSearchQuery: (query) => dispatch(actions.updateSearchQuery(query)),
      toggleAddOns: () => dispatch(actions.toggleAddOns()),
      toggleVoice: () => dispatch(actions.toggleVoice()),
    });
    */

    const {
      gamesData,
      searchQuery,
      requireAddOns,
      requireVoice,
      updateSearchQuery,
      toggleAddOns,
      toggleVoice,
    } = this.props;

    return (
      <div>
        <SearchBar
          searchQuery={searchQuery}
          requireAddOns={requireAddOns}
          requireVoice={requireVoice}
          updateSearchQuery={updateSearchQuery}
          toggleAddOns={toggleAddOns}
          toggleVoice={toggleVoice}
        />

        <GamesTable
          gamesData={gamesData}
        />
      </div>
    );
  }
}

// // connect will always require two arguments
// // but since we are not access mapDispatchToProps we pass null as a second value
// export default connect(mapStateToProps, null)(MainContainer);

// export default GameDataContainer;
export default connect(mapStateToProps, mapDispatchToProps)(GameDataContainer);
