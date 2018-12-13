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
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import './styles/main.scss';
import mainReducer from 'reduxAlias/mainReducer';
import App from './Navigation/containers/App';

library.add(faSearch);
library.add(faAngleDown);
library.add(faThLarge);
library.add(faThList);
library.add(faStar);
library.add(faStarHalfAlt);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeWithMiddleware = createStore(mainReducer,composeEnhancers(applyMiddleware(thunk)));

// Render INTO Browser DOM
ReactDom.render(
  <Provider
    store={storeWithMiddleware}
  >
    <App />
  </Provider>, document.querySelector('#root-App'));
