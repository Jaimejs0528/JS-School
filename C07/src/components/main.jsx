import React, { Component } from 'react';

import NavMenu from './Nav/navMenu';
import { NAV_MENU, MOST_READ } from '../utils/constants';
import MostRead from './Nav/mostRead';
import BooksContainer from './BookShelf/booksContainer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleBookShelf: "Books",
    };
    this.getOptionSelected = this.getOptionSelected.bind(this);
  }
  
  getOptionSelected(option){
    this.setState({
      titleBookShelf:option,
    })
  }

  render() {
    const { filter } = this.props;
    const { titleBookShelf } = this.state;
    return (
      <div className="main">
        <NavMenu menu="Main" items={NAV_MENU} getOptionSelected={this.getOptionSelected} />
        <BooksContainer title={titleBookShelf} filter={filter} />
        <MostRead title="Most Read Books" items={MOST_READ} />
      </div>);
  }
}

export default Main;
