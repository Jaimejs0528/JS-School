import React, { Component } from 'react';
import PropTypes from 'prop-types';


class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      books: [],
    };
  }

  render() {
    const { isLoading, books } = this.state;
    if (isLoading) {
      return (
        <div>
          <span>is Loading...</span>
        </div>);
    }

    return (
      <div>
        <div>
          {books.map(infoBook => <OverlayBookContainer infoBook={infoBook} />)}
        </div>
      </div>);
  }
}

export default BookShelf;
