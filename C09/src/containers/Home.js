/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Home from 'pages/Home/Home';
import NavMenu from 'pages/Home/Asides-group/NavMenu';
import {
  openDropdown,
  changeLogo,
  screenHasChanged,
  changeSelectedOption,
  openMenu,
  openMenuKeyBoard,
} from 'reduxAlias/modules/Books/bookActions';

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

const mapDispatchToProps = dispatch => (bindActionCreators(functionsToExport, dispatch));
const mapDispatchToPropsNav = dispatch => (bindActionCreators(functionsToExportNav, dispatch));

export default (connect(mapStateToProps, mapDispatchToProps)(Home));
export const NavMenuContainer = (connect(mapStateToProps, mapDispatchToPropsNav)(NavMenu));