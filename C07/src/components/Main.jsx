import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavMenu from './Nav/NavMenu';
import { NAV_MENU, MOST_READ,DEFAULT_HOME } from '../utils/constants';
import MostRead from './Nav/MostRead';
import BooksContainer from './BookShelf/BooksContainer';

// Main Container bookshelf, nav and aside
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleBookShelf: DEFAULT_HOME,
    };
    this.getOptionSelected = this.getOptionSelected.bind(this);
  }

  // Validates which options in nav is selected
  getOptionSelected(option) {
    this.setState({
      titleBookShelf: option,
    });
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

// Props Validation
Main.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Main;
