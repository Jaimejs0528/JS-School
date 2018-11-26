import React, { Component } from 'react';
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
import Header from './components/Header/Header';
import Main from './components/Main';

library.add(faSearch);
library.add(faAngleDown);
library.add(faThLarge);
library.add(faThList);
library.add(faStar);
library.add(faStarHalfAlt);

// Main Class Contains all app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
    this.getFilter = this.getFilter.bind(this);
  }

  getFilter(filter) {
    this.setState({
      filter,
    });
  }

  render() {
    const { filter } = this.state;
    return (
      <div>
        <Header getFilter={this.getFilter} />
        <Main filter={filter} />
      </div>);
  }
}

const whatRender = <App />;
const whereRender = document.querySelector('#root-App');
ReactDom.render(whatRender, whereRender);
