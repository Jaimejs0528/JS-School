/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';


import { NAV_MENU, MOST_READ } from 'utils/constants';
import NavMenu from 'pages/Home/containers/NavMenu';
import MostRead from 'pages/Home/components/Asides/MostRead';
import BooksContainer from './BooksContainer';
import { stylesAside } from '../../styles/asides';

const MostReadComp = injectSheet(stylesAside)(MostRead);

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
    const { filter, classes } = this.props;
    return (
      <div className="main">
        <NavMenu menu="Main" items={NAV_MENU} />
        <BooksContainer {...this.props} filter={filter} />
        <MostReadComp classes={classes} title="Most Read Books" items={MOST_READ} />
      </div>);
  }
}

export default Main;
