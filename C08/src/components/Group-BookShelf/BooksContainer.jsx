/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BooksHeader from './BooksHeader';
import BookShelf from './Bookshelf';

// Container for bookshelf and its header
class BooksContainer extends Component {
  // Props Validations
  static propTypes = {
    title: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }

  constructor(props){
    super(props)
    this.state = {
      pagination: {},
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { pagination } = this.state;
    const { match, location,filter } = this.props;
    
    return (location.search !== nextProps.location.search) ||
      (pagination !== nextState.pagination) ||
      (match.url !== nextProps.match.url) || 
      (filter !== nextProps.filter);
  }

  getRef = (pagination) => {
    this.setState({pagination});
  }

  render() {
    const { title, filter, match } = this.props;
    const { pagination } = this.state;

    return (
      <main className="books-container">
        <BooksHeader pagination={pagination} title={title} />
        <BookShelf {...this.props} location={location} pagination={this.getRef} query={match} filter={filter} />
      </main>);
  }
}

export default BooksContainer;
