import { connect } from 'react-redux'

import BooksHeader from "../components/Bookshelf-group/BooksHeader";

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

export default (connect(mapStateToProps)(BooksHeader));