/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import reducers from './reducers/index';

import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

// // we are adding composeWithDevTools here to get easy access to the Redux dev tools
// const store = createStore(
//   reducers,
//   composeWithDevTools()
// );

const store = createStore(reducers);

// export default store;

export default store;
