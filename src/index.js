/* eslint-disable react/jsx-filename-extension */
/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application.  Hangs React app off of #root in index.html
 *
 * ************************************
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';


// I kept this as a .js file because otherwise the app won't compile
// (because of Create React App settings)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
