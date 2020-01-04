/**
 * ************************************
 *
 * @module  index.js
 * @author Timothy Mai
 * @date
 * @description the place where the reducers will be combined
 *
 * ************************************
 */

import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import dataReducer from './dataReducer';

const reducers = combineReducers({
  search: searchReducer,
  data: dataReducer,
});

export default reducers;
