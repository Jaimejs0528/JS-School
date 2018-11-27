import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OverlayBookContainer from './OverlayBookContainer';
import { NAV_MENU, DEFAULT_HOME, NOT_CONECTION } from '../../utils/constants';


// filter by book title and author
function filterbooks(filter) {
  const expReg = new RegExp(filter, 'i');
  return items => expReg.test(items.bookinfo.title) || expReg.test(items.bookinfo.author);
}

// Class that contains all books
class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      books: [],
      query: DEFAULT_HOME,
    };
    this.getBooks = this.getBooks.bind(this);
  }

  // Mount getBooks to obtain books
  componentDidMount() {
    this.setState({ isLoading: true });
    const { query } = this.props;
    this.setState({
      query,
    });
    this.getBooks(query);
  }

  // Avoid fetch
  componentWillUnmount() {
    this.setState({ isLoading: false });
  }

  // Consume the services from server
  getBooks(query) {
    const { query: queryLocal, isLoading } = this.state;
    if (query !== queryLocal) {
      this.setState({
        isLoading: true,
        error: null,
        query,
      });
    }
    if (isLoading) {
      const urlBase = 'http://localhost:3202/bookshelf/books/';
      const consumeService = async (endpoint = '') => {
        const response = await fetch(`${urlBase}${endpoint}`);
        return response.json();
      };
      if (query === NAV_MENU[4][0]) {
        consumeService('digitals').then((response) => {
          if (response.code) {
            this.setState({ error: response.message, isLoading: false  });
          } else {
            this.setState({
              isLoading: false,
              books: response,
              query,
            });
          }
        }).catch(() => this.setState({ error: NOT_CONECTION, isLoading: false }));
      } else if (query === NAV_MENU[5][0]) {
        this.setState({
          error: 'Comming soon',
          isLoading: false,
          books: [],
          query,
        });
      } else if (query !== '' && query !== DEFAULT_HOME) {
        consumeService(`cities/${query.toLowerCase()}`).then((response) => {
          console.log(query, queryLocal);
          if (response.code) {
            this.setState({ error: response.message, isLoading: false  });
          } else {
            this.setState({
              isLoading: false,
              books: response,
              query,
            });
          }
        }).catch(() => this.setState({ error: NOT_CONECTION, isLoading: false }));
      } else {
        consumeService().then((response) => {
          if (response.code) {
            this.setState({ error: response.message, isLoading: false  });
          } else {
            this.setState({
              isLoading: false,
              books: response,
              query,
            });
          }
        }).catch(() => this.setState({ error: NOT_CONECTION, isLoading: false }));
      }
    }
  }

  render() {
    const { query, filter } = this.props;
    const { isLoading, books, error } = this.state;
    this.getBooks(query);

    // Meanwhile is loading data show a message
    if (isLoading) {
      return (
        <div className="loading">
          <h1>Loading...</h1>
        </div>);
    }

    // If there's an error show a message
    if (error) {
      return (
        <div className="error">
          <h1>{error}</h1>
        </div>);
    }

    // Show All books and applies filter
    return (
      <div className="bookshelf">
        {books.filter(filterbooks(filter)).map(item => (
          <OverlayBookContainer
            bookData={item}
            key={item.bookinfo.isbn}
          />
        ))}
      </div>);
  }
}

// Props Validations
BookShelf.propTypes = {
  query: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};

export default BookShelf;
