/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Home from 'pages/Home/Home';
import { openDropdown, changeLogo } from 'actions/bookActions';

const mapStateToProps =  (state) => {
  const { 
    isLoading,
    errorBooks,
    books,
    pagination,
    menuItemSelected,
    showSummary,
    showDropDown,
    isSmallLogo,
    bookSelected
  } = state.books;

  return ({
  isLoading,
  errorBooks,
  books,
  pagination,
  menuItemSelected,
  showSummary,
  showDropDown,
  isSmallLogo,
  bookSelected,
  });
}

// Validates when screen has changed
const screenHasChanged = () => {
  return dispatch => {
    // Hide all overlay summaries open
  $('.overlay-summary').removeClass('show-summary').removeClass('change-sense');
  // Change Icon when screen resize
  dispatch(changeLogo(window.innerWidth));
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ screenHasChanged, changeLogo, openDropdown }, dispatch));

export default (connect(mapStateToProps, mapDispatchToProps)(Home));