import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import BooksHeader from "../components/Bookshelf/BooksHeader";
import { stylesBookShelfHeader } from '../styles/bookShelfHeader';

// Create the map from state to props
const mapStateToProps =  (state) => {
  const { 
    pagination,
    menuItemSelected,
  } = state.books;

  return ({
    pagination,
    menuItemSelected,
  });
}

const BooksHeaderComp = injectSheet(stylesBookShelfHeader)(BooksHeader);

export default (connect(mapStateToProps)(BooksHeaderComp));