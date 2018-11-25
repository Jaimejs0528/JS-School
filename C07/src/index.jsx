import React, { PureComponent } from 'react';
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

import HeaderComp from './components/header';
import MainComp from './components/main';

library.add(faSearch);
library.add(faAngleDown);
library.add(faThLarge);
library.add(faThList);
library.add(faStar);
library.add(faStarHalfAlt);

class App extends PureComponent {
  render() {
    const { title } = this.props;
    return (
      <div>
        <HeaderComp />
        <MainComp />
      </div>);
  }
}

const whatRender = <App />;
const whereRender = document.querySelector('#root-App');
ReactDom.render(whatRender, whereRender);
