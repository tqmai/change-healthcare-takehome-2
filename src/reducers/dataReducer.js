/**
 * ************************************
 *
 * @module  dataReducer.js
 * @author Timothy Mai
 * @date 1/3/20
 * @description reducer for importing data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  isLoading: true,
  gamesData: {},
  totalNumOfGames: 0,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_GAME_DATA:
      return {
        ...state,
        gamesData: action.payload,
      };

    case types.SET_TOTAL_NUMBER_OF_GAMES:
      return {
        ...state,
        totalNumOfGames: action.payload,
      };

    case types.TOGGLE_LOADING_STATE:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    default:
      return state;
  }
}

export default dataReducer;
