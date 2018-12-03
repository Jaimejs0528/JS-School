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

import './styles/main.scss';
import App from 'components/App';
// import Login from 'components/Group-Login/Login';

library.add(faSearch);
library.add(faAngleDown);
library.add(faThLarge);
library.add(faThList);
library.add(faStar);
library.add(faStarHalfAlt);

// Render INTO Browser DOM
ReactDom.render(<App />, document.querySelector('#root-App'));
