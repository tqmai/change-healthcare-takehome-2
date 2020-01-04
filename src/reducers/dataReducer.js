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

const gamesData = {
  4: {
    ID: 1,
    name: 'World of Warcraft',
    supportsAddons: true,
    supportsVoice: false,
    slug: 'wow',
    gameFiles: [
      {
        ID: 1,
        FileName: 'file1',
      },
      {
        ID: 2,
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
        ID: 1,
        FileName: 'file1',
      },
    ],
    categorySections: [],
  },
};

function dataReducer(state = gamesData, action) { // UPDATE THIS LATER TO START WITH AN EMPTY OBJECT
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
