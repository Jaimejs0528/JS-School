/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NOT_CONNECTION } from 'utils/constants';
import OverlayBookContainer from './OverlayBookContainer';

// Class that contains all books
class BookShelf extends Component {
  // Props Validations
  static propTypes = {
    query: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired,
    pagination: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      books: [],
      unMount: false,
    };
  }

  // Mount getBooks to obtain books
  componentDidMount() {
    this.setState({ isLoading: true });
    const { query } = this.props;
    this.getBooks(query);
  }

  // Validates when the query has changed to get new books
  componentWillReceiveProps(nextProps) {
    const {query} = this.props;
    if(query !== nextProps.query){
      this.setState({
        isLoading: true,
        error: null,
      });
      this.getBooks(nextProps.query);
    }
  }

  // When must re-render
  shouldComponentUpdate(nextProps, nextState) {
    const { query , filter } = this. props;
    const { error, books } = this.state;
    return (query.url !== nextProps.query.url) ||
      (filter !== nextProps.filter) ||
      (error !== nextState.error) ||
      (books !== nextState.books);
  }

  // Avoid fetch
  componentWillUnmount() {
    this.setState({ unMount: true });
  }

  // Filter by book title and author
  filterbooks = (filter) => {
    const expReg = new RegExp(filter, 'i');
    return items => expReg.test(items.bookinfo.title) || expReg.test(items.bookinfo.author);
  }

  // Make a request to server
  queryRequest = (endpoint = '') => {
    const urlBase = 'http://localhost:3202/bookshelf/books/';
    const consumeService = async (endpointService = '') => {
      const response = await fetch(`${urlBase}${endpointService}`);
      return response.json();
    };

    // Fetch data from server
    consumeService(endpoint).then((response) => {
      const { pagination } = this.props;
      if (response.code) {
        this.setState({ error: response.message, isLoading: false  });
      } else {
        this.setState({
          isLoading: false,
          books: response.books,
        },()=>pagination(response.pagination));
      }
    }).catch(() => this.setState({ error: NOT_CONNECTION, isLoading: false }));
  }

  // Consume the services from server
  getBooks = (query) => {
    const { unMount } = this.state;
    const queryD = query.url.split('/')[2];

    // If unmount this component
    if(unMount) return undefined;

    if(queryD === 'cities'){
      const city = query.url.split('/')[3];
      this.queryRequest(`${queryD}/${city.toLowerCase()}`);
    }else {
      this.queryRequest(queryD);
    }   
  }

  render() {
    const { filter } = this.props;
    const { isLoading, books, error } = this.state;

    // Selecting class main Div
    const rightClass = classNames({
      loading: isLoading,
      error: error,
      bookshelf: !isLoading && !error
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
        <When condition={error}>
          <h1>{error}</h1>
        </When>
        <Otherwise>
          <For each="book" of={booksFiltered}>
            <OverlayBookContainer
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
