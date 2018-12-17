/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import injectSheet from 'react-jss';

import {
  changeSelectedOption,
  openMenu,
  openMenuKeyBoard,
} from 'reduxAlias/modules/Books/bookActions';
import NavMenu from 'pages/Home/components/Asides/NavMenu';
import { stylesNavMenu } from '../styles/asides';

const mapStateToProps =  (state) => {
  const { 
    menuItemSelected,
    openNavMenu,
  } = state.books;

  return ({
    menuItemSelected,
    openNavMenu,
  });
}

const functionsToExport = {
  changeSelectedOption,
  openMenu,
  openMenuKeyBoard,
}

const mapDispatchToProps = dispatch => (bindActionCreators(functionsToExport, dispatch));
const NavMenuComp = injectSheet(stylesNavMenu)(NavMenu);

export default (connect(mapStateToProps, mapDispatchToProps)(NavMenuComp));