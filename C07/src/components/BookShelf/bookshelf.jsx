import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OverlayBookContainer from './overlayBookContainer'
import { NAV_MENU } from '../../utils/constants';

class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      books: [],
      query: 'Books',
    };
    this.getBooks = this.getBooks.bind(this);
    this.filterbooks = this.filterbooks.bind(this);
  }

  getBooks(query){
    if(query !== this.state.query){
      this.setState({
        isLoading: true,
        error: null,
        query,
      });
    }
    if(this.state.isLoading){
      const urlBase= "http://localhost:3202/bookshelf/books/";
    const consumeService = async (endpoint = '') => {
      const response = await fetch(`${urlBase}${endpoint}`);
      return response.json();
    }
    if(query === NAV_MENU[3][0]){
      consumeService('digitals').then(response => {
        this.setState({
          isLoading: false,
          books: response,
          query,
        })
      }).catch(() => this.setState({error: 'There isn\'t connection', isLoading: false,}));
    } else if(query === NAV_MENU[4][0]){
      this.setState({
        error: 'Comming soon',
        isLoading: false,
        books: [],
        query,
      });
    } else if(query !== '' && query !== 'Books'){
      consumeService(`cities/${query.toLowerCase()}`).then(response => {
        if (response.code) {
          this.setState({error: response.message});
        } else {
          this.setState({
            isLoading: false,
            books: response,
            query,
          })
        }
      }).catch(() => this.setState({error: 'There isn\'t connection', isLoading: false,}));
    } else {
      consumeService().then(response => {
        if (response.code) {
          this.setState({error: true});
        } else {
          this.setState({
            isLoading: false,
            books: response,
            query,
          })
        }
      }).catch(() => this.setState({error: 'There isn\'t connection', isLoading: false,}));
    }
    }
  }

  filterbooks(filter) {
    const expReg = new RegExp(filter,'i');
    return items => expReg.test(items.bookinfo.title) || expReg.test(items.bookinfo.author)
  }

  componentDidMount() {
    this.setState({isLoading:true});
    const { query } = this.props;
    this.setState({
      query,
    })
    console.log(query);
    this.getBooks(this.state.query);
  }

  render() {
    const { query, filter } = this.props;
    const { isLoading, books, error } = this.state;
    {this.getBooks(query)}
    if (isLoading) {
      return (
        <div className="loading">
          <h1>Loading...</h1>
        </div>);
    }

    if (error) {
      return (
        <div className="error">
          <h1>{error}</h1>
        </div>);
    }
    return (
      <div className="bookshelf">
          {books.filter(this.filterbooks(filter)).map(item => <OverlayBookContainer
            bookInfo={item.bookinfo}
            key={item.bookinfo.isbn} />)}
      </div>);
  }
}

export default BookShelf;
