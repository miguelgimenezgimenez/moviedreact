import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import apiMiddleware from './apiMiddleware';

// let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(
  reducers,
  applyMiddleware(thunk, apiMiddleware)

);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
