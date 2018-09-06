import 'core-js/modules/es6.object.get-own-property-names';
import 'core-js/modules/es6.object.get-prototype-of';

import 'es5-shim'; //IE8 ^4.5.10
// import 'es5-shim/es5-sham';
import 'es6-shim';
// import 'core-js/es5';
// import 'core-js/es6';
// import 'core-js/es7/object';
import 'object-create-ie8'; //IE8, 司徒正美写的库，这样就不用加上es5-sham
import 'object-defineproperty-ie8'; //IE8， 司徒正美写的库
import 'console-polyfill'; //IE8下，如果你不打开开发者工具，window下是没有console这个对象的，
//只有打开了F12才会有这个方法
import 'json3'; //比IE8的JSON好用
import 'bluebird'; //性能超高的Promise实现
import 'fetch-polyfill2'; //fetch 实现，司徒正美的另一力作
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
