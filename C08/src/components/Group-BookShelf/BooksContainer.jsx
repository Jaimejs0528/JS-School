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
  }

  constructor(props){
    super(props)
    this.state = {
      pagination: {},
    }
    this.paginationRef = React.createRef();
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
        <BookShelf pagination={this.getRef} query={match} filter={filter} />
      </main>);
  }
}

export default BooksContainer;
