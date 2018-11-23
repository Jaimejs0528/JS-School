import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import BooksHeader from './booksHeader';
import BookShelf from './bookshelf';

class BooksContainer extends PureComponent {
  render() {
    const { title } = this.props;
    return (
      <main>
        <BooksHeader title={title} />
        <BookShelf />
      </main>);
  }
}

BooksContainer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BooksContainer;
