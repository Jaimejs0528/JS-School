/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NAV_MENU, MOST_READ } from 'utils/constants';
import { NavMenuContainer as NavMenu } from 'pages/Home/containers/Home';
import MostRead from 'pages/Home/components/Asides/MostRead';
import BooksContainer from './BooksContainer';

// Main Container bookshelf, nav and aside
class Main extends Component {
  // Props Validation
  static propTypes = {
    filter: PropTypes.string.isRequired,
  }

  // When must re-render
  shouldComponentUpdate(nextProps) {
  const { filter, location, menuItemSelected } = this.props;
  return (location.search !== nextProps.location.search ||
    filter !== nextProps.filter ||
    menuItemSelected !== nextProps.menuItemSelected);
  }

  render() {
    // Get props and state
    const { filter } = this.props;
    return (
      <div className="main">
        <NavMenu menu="Main" items={NAV_MENU} />
        <BooksContainer {...this.props} filter={filter} />
        <MostRead title="Most Read Books" items={MOST_READ} />
      </div>);
  }
}

export default Main;
