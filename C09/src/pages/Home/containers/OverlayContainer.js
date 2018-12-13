/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  changeSelectedBook,
  closeSummary,
  showLendIcon,
  lendABook,
} from 'reduxAlias/modules/Books/bookActions';
import OverlayBookContainer from '../components/Bookshelf/OverlayBookContainer';

// Create the map from state to props
const mapStateToProps =  (state) => {
  const { 
    showSummary,
    showDropDown,
    isSmallLogo,
    bookSelected
  } = state.books;

  return ({
  showSummary,
  showDropDown,
  isSmallLogo,
  bookSelected,
  });
}

// which functions will be exported
const functionsToExport = {
  changeSelectedBook,
  showLendIcon,
  closeSummary,
  lendABook,
}

const mapDispatchToProps =  dispatch => (bindActionCreators(functionsToExport,dispatch))

export default (connect(mapStateToProps,mapDispatchToProps)(OverlayBookContainer));