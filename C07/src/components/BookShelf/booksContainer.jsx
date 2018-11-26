import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import BooksHeader from '../BookHeader/booksHeader';
import BookShelf from './bookshelf';

class BooksContainer extends PureComponent {
  render() {
    const { title, filter } = this.props;
    return (
      <main className="books-container">
        <BooksHeader title={title} />
        <BookShelf query={title} filter={filter}/>
      </main>);
  }
}

BooksContainer.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};

export default BooksContainer;
