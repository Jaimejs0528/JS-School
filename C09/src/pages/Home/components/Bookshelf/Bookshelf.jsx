/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import OverlayBookContainer from '../../containers/OverlayContainer';

// Class that contains all books
class BookShelf extends Component {
  // Props Validations
  static propTypes = {
    query: PropTypes.object.isRequired,
    books: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    location: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired,
    errorBooks: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    fetchBooksData: PropTypes.func.isRequired,
  }

  // Mount getBooks to obtain books
  componentDidMount() {
    const { query, fetchBooksData, location } = this.props;
    fetchBooksData(query, location);
  }

  // Validates when the query has changed to get new books
  componentWillReceiveProps(nextProps) {
    const { query, fetchBooksData, location } = this.props;
    if(query.url !== nextProps.query.url ||
      location.search !== nextProps.location.search){
      fetchBooksData(nextProps.query, nextProps.location);
    }
  }

  // When must re-render
  shouldComponentUpdate(nextProps) {
    const { query , filter, location, books, errorBooks, isLoading } = this. props;
    return (location.search !== nextProps.location.search ||
      query.url !== nextProps.query.url ||
      filter !== nextProps.filter ||
      errorBooks !== nextProps.errorBooks ||
      books !== nextProps.books ||
      isLoading !== nextProps.isLoading);
  }

  // Avoid fetch
  componentWillUnmount() {
  }

  // Filter by book title and author
  filterbooks = (filter) => {
    const expReg = new RegExp(filter, 'i');
    return items => expReg.test(items.bookinfo.title) || expReg.test(items.bookinfo.author);
  }

  render() {
    const { filter, books, errorBooks, isLoading } = this.props;

    // Selecting class main Div
    const rightClass = classNames({
      loading: isLoading,
      error: errorBooks,
      bookshelf: !isLoading && !errorBooks
    });
    const booksFiltered = books.filter(this.filterbooks(filter));

    return(
      <div className={rightClass}>
        <Choose>
          {/* // Meanwhile is loading data show a message */}
          <When condition={isLoading}>
            <h1>Loading...</h1>
          </When>
          {/* // If there's an error show a message */}
          <When condition={errorBooks}>
            <h1>{errorBooks.toString()}</h1>
          </When>
          <Otherwise>
            <For each="book" of={booksFiltered}>
              <OverlayBookContainer
                lendBook={this.lendABook}
                bookData={book}
                key={book.bookinfo.isbn}
              />
            </For>
          </Otherwise>
        </Choose>
      </div>
    );
  }
}

export default BookShelf;
