import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import BooksHeader from '../BookHeader/BooksHeader';
import BookShelf from './Bookshelf';

// Container for bookshelf and its header
class BooksContainer extends PureComponent {
  render() {
    const { title, filter } = this.props;
    return (
      <main className="books-container">
        <BooksHeader title={title} />
        <BookShelf query={title} filter={filter} />
      </main>);
  }
}

// Props Validations
BooksContainer.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};

export default BooksContainer;
