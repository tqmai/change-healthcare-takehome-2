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

// import { combineReducers } from 'redux';
import { combineReducers } from 'redux';

// // import all reducers here
// import marketsReducer from './marketsReducer'; - TAKEN FROM MEGAMARKETS

import searchReducer from './searchReducer';
import dataReducer from './dataReducer';

// // combine reducers
// const reducers = combineReducers({
//   // if we had other reducers, they would go here
//   markets: marketsReducer,
// });

const reducers = combineReducers({
  search: searchReducer,
  data: dataReducer,
});

// // make the combined reducers available for import
// export default reducers;

export default reducers;
