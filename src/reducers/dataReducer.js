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

function dataReducer(state = {}, action) {
  switch (action.type) {
    case types.ADD_GAME_DATA:
      return {
        ...state, // update this later
      };

    default:
      return state;
  }
}

export default dataReducer;
