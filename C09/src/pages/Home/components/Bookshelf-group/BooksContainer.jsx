/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BooksHeader from '../../containers/bookHeader';
import { BookShelfContainer as BookShelf } from '../../containers/Home';

// Container for bookshelf and its header
class BooksContainer extends Component {
  // Props Validations
  static propTypes = {
    filter: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    pagination: PropTypes.object.isRequired,
  }

  // When re-render
  shouldComponentUpdate(nextProps) {
    const { match, location,filter } = this.props;
    return (location.search !== nextProps.location.search ||
      match.url !== nextProps.match.url || 
      filter !== nextProps.filter);
  }

  render() {
    const {filter, match, location } = this.props;
    return (
      <main className="books-container">
        <BooksHeader />
        <BookShelf {...this.props} location={location} query={match} filter={filter} />
      </main>);
  }
}

export default BooksContainer;
