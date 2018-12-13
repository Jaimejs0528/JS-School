/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  changeSelectedBook,
  closeSummary,
  showLendIcon,
  lendABook,
  selectLimitDate,
} from 'reduxAlias/modules/Books/bookActions';
import OverlayBookContainer from '../components/Bookshelf/OverlayBookContainer';

// Create the map from state to props
const mapStateToProps =  (state) => {
  const { 
    showLendI,
    showDropDown,
    isSmallLogo,
    limitDate,
    bookSelected
  } = state.books;

  return ({
  showLendI,
  showDropDown,
  limitDate,
  isSmallLogo,
  bookSelected,
  });
}


// which functions will be exported
const functionsToExport = {
  changeSelectedBook,
  showLendIcon,
  closeSummary,
  selectLimitDate,
  lendABook,
}

const mapDispatchToProps =  dispatch => (bindActionCreators(functionsToExport,dispatch))

export default (connect(mapStateToProps,mapDispatchToProps)(OverlayBookContainer));