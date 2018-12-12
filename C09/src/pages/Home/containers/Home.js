/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from 'pages/Home/Home';
import NavMenu from 'pages/Home/components/Asides-group/NavMenu';
import {
  openDropdown,
  changeLogo,
  screenHasChanged,
  changeSelectedOption,
  openMenu,
  openMenuKeyBoard,
  fetchBooksData,
} from 'reduxAlias/modules/Books/bookActions';
import BookShelf from 'pages/Home/components/Bookshelf-group/Bookshelf';

// Create the map from state to props
const mapStateToProps =  (state) => {
  const { 
    isLoading,
    errorBooks,
    books,
    pagination,
    menuItemSelected,
    openNavMenu,
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
  openNavMenu,
  showSummary,
  showDropDown,
  isSmallLogo,
  bookSelected,
  });
}

// which functions will be exported
const functionsToExport = {
  screenHasChanged,
  changeLogo,
  openDropdown,
}

const functionsToExportNav = {
  changeSelectedOption,
  openMenu,
  openMenuKeyBoard,
}

const functionsToExportBookshelf = {
fetchBooksData
}

const mapDispatchToProps = dispatch => (bindActionCreators(functionsToExport, dispatch));
const mapDispatchToPropsNav = dispatch => (bindActionCreators(functionsToExportNav, dispatch));
const mapDispatchToPropsBookShelf = dispatch => (bindActionCreators(functionsToExportBookshelf, dispatch));

export default (connect(mapStateToProps, mapDispatchToProps)(Home));
export const NavMenuContainer = (connect(mapStateToProps, mapDispatchToPropsNav)(NavMenu));
export const BookShelfContainer = (connect(mapStateToProps, mapDispatchToPropsBookShelf)(BookShelf))