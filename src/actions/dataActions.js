/**
 * ************************************
 *
 * @module  dataActions.js
 * @author Timothy Mai
 * @date 1/4/20
 * @description data action creators
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

export const addGameData = (gameData) => ({
  type: types.ADD_GAME_DATA,
  payload: gameData,
});

export const setTotalNumOfGames = (num) => ({
  type: types.SET_TOTAL_NUMBER_OF_GAMES,
  payload: num,
});

export const toggleLoadingState = () => ({
  type: types.TOGGLE_LOADING_STATE,
  payload: null,
});
