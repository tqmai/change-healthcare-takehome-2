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

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

const store = createStore(reducers, composeWithDevTools(
  // applyMiddleware(...middleware), // uncomment this line if we add middleware
));

export default store;
