/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NAV_MENU, MOST_READ, DEFAULT_HOME } from 'utils/constants';
import NavMenu from 'components/Group-asides/NavMenu';
import MostRead from 'components/Group-asides/MostRead';
import BooksContainer from './BooksContainer';

// Main Container bookshelf, nav and aside
class Main extends Component {
  // Props Validation
  static propTypes = {
    filter: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      titleBookShelf: DEFAULT_HOME,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
  const { filter } = this.props;
  const { titleBookShelf } = this.state;

  return (filter !== nextProps.filter) ||
    (titleBookShelf !== nextState.titleBookShelf);
  }

  // Validates which options in nav is selected
  getOptionSelected = (option) => {
    this.setState({
      titleBookShelf: option,
    });
  }

  render() {
    // Get props and state
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
