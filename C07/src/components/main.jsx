import React, { Component } from 'react';

import NavMenu from './navMenu';
import { NAV_MENU, MOST_READ } from '../utils/constants';
import MostRead from './mostRead';
import BooksContainer from './booksContainer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hola: "h",
    };
  }

  render() {
    const { titles } = this.props;
    return (
      <div>
        <NavMenu menu="Main" items={NAV_MENU} />
        <BooksContainer title="holas" />
        <MostRead title="Most Read Books" items={MOST_READ} />
      </div>);
  }
}


export default Main;
