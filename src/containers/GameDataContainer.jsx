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
import PropTypes from 'prop-types';
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

function GameDataContainer(props) {
  const {
    gamesData,
    searchQuery,
    requireAddOns,
    requireVoice,
    updateSearchQuery,
    toggleAddOns,
    toggleVoice,
  } = props;

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

GameDataContainer.propTypes = {
  gamesData: PropTypes.objectOf(PropTypes.object).isRequired,
  searchQuery: PropTypes.string.isRequired,
  requireAddOns: PropTypes.bool.isRequired,
  requireVoice: PropTypes.bool.isRequired,
  updateSearchQuery: PropTypes.func.isRequired,
  toggleAddOns: PropTypes.func.isRequired,
  toggleVoice: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameDataContainer);
