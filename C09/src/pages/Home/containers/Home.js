/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from 'pages/Home/Home';
import {
  openDropdown,
  changeLogo,
  screenHasChanged,
} from 'reduxAlias/modules/Books/bookActions';

// Create the map from state to props
const mapStateToProps =  (state) => {
  const { 
    menuItemSelected,
    showDropDown,
    isSmallLogo,
    bookSelected
  } = state.books;

  return ({
    menuItemSelected,
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

const mapDispatchToProps = dispatch => (bindActionCreators(functionsToExport, dispatch));

export default (connect(mapStateToProps, mapDispatchToProps)(Home));