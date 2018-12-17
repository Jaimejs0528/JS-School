/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import injectSheet from 'react-jss';

import { fetchBooksData } from 'reduxAlias/modules/Books/bookActions';
import BookShelf from 'pages/Home/components/Bookshelf/Bookshelf';
import { stylesBookShelf } from '../styles/bookShelf';

const mapStateToProps =  (state) => {
  const { 
    isLoading,
    errorBooks,
    books,
    pagination,
    menuItemSelected,
    bookSelected
  } = state.books;

  return ({
  isLoading,
  errorBooks,
  books,
  pagination,
  menuItemSelected,
  bookSelected,
  });
}


const functionsToExportBookshelf = {
  fetchBooksData
}

const mapDispatchToPropsBookShelf = dispatch => (bindActionCreators(functionsToExportBookshelf, dispatch));
const BookShelfComp = injectSheet(stylesBookShelf)(BookShelf);

export default (connect(mapStateToProps, mapDispatchToPropsBookShelf)(BookShelfComp));