/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDom from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faAngleDown,
  faThLarge,
  faThList,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import './styles/main.scss';
import App from './containers/App';
import reducers from './reducers/loginReducer';
// import Login from './pages/Login/containers/Login';

library.add(faSearch);
library.add(faAngleDown);
library.add(faThLarge);
library.add(faThList);
library.add(faStar);
library.add(faStarHalfAlt);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// Render INTO Browser DOM
ReactDom.render(
  <Provider
    store={createStoreWithMiddleware(reducers)}
  >
    <App />
  </Provider>, document.querySelector('#root-App'));
