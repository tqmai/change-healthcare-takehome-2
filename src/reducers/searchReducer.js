/**
 * ************************************
 *
 * @module  searchReducer.js
 * @author Timothy Mai
 * @date 1/3/20
 * @description reducer for games
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  // gamesData: {},
  searchQuery: '',
  requireAddOns: false,
  requireVoice: false,
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    // case types.ADD_GAME_DATA:
    //   return {
    //     ...state,
    //   };

    case types.UPDATE_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case types.TOGGLE_ADD_ONS:
      return {
        ...state,
        requireAddOns: !state.requireAddOns,
      };

    case types.TOGGLE_VOICE:
      return {
        ...state,
        requireVoice: !state.requireVoice,
      };

    default:
      return state;
  }
}

export default searchReducer;
