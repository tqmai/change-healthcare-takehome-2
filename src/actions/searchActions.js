/**
 * ************************************
 *
 * @module  searchActions.js
 * @author Timothy Mai
 * @date 1/3/20
 * @description search action creators
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

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
