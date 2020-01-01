/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application.  Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// REMEMBER TO GO BACK AND ADD REDUX THINGS AFTER WE ADD STATE TO APP

// CODE BELOW FROM MEGA MARKETS - use this later

// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './App.jsx';
// import store from './store';

// render(
//   // wrap the App in the Provider component and pass in the store
//   // Provider makes the Redux store available to any nested components that are wrapped with connect()
//   <Provider store={store}><App /></Provider>,
//   document.getElementById('contents')
// );



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
