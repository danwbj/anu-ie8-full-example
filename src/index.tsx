import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import Routes from './routes';
var container = document.getElementById('mainContainer');

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  container
);
