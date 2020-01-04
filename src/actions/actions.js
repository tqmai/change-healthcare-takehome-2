/**
 * ************************************
 *
 * @module  actions.js
 * @author Timothy Mai
 * @date 1/3/20
 * @description action creators
 *
 * ************************************
 */

// // import actionType constants
// import * as types from '../constants/actionTypes'
import * as types from '../constants/actionTypes';

/*

export const ADD_GAME_DATA = 'ADD_GAME_DATA';
export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';
export const TOGGLE_ADD_ONS = 'TOGGLE_ADD_ONS';
export const TOGGLE_VOICE = 'TOGGLE_VOICE';

*/

export const addGameData = (gameData) => ({
  type: types.ADD_GAME_DATA,
  payload: gameData,
});

export const updateSearchQuery = (query) => ({
  type: types.UPDATE_SEARCH_QUERY,
  payload: query,
});

export const toggleAddOns = () => ({
  type: types.TOGGLE_ADD_ONS,
  payload: null,
});

export const toggleVoice = () => ({
  type: types.TOGGLE_VOICE,
  payload: null,
});

// // add card needs to be passed a marketId from our dispatch function
// // we will then pass along our marketId as a payload to the marketsReducer
// export const addCard = (marketId) => ({
//   type: types.ADD_CARD,
//   payload: marketId
// });

// export const deleteCard = (marketId) => ({
//   type: types.DELETE_CARD,
//   payload: marketId
// });

// export const addMarket = () => ({
//   type: types.ADD_MARKET,
//   payload: null
// });


// export const setNewLocation = (location) => ({
//   type: types.SET_NEW_LOCATION,
//   payload: location
// })


