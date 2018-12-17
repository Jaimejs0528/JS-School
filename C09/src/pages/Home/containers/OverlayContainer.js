/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  changeSelectedBook,
  closeSummary,
  lendABook,
  selectLimitDate,
} from 'reduxAlias/modules/Books/bookActions';
import OverlayBookContainer from '../components/Bookshelf/OverlayBookContainer';

// Create the map from state to props
const mapStateToProps =  (state) => {
  const { 
    showDropDown,
    isSmallLogo,
    limitDate,
    bookSelected
  } = state.books;

  return ({
    showDropDown,
    limitDate,
    isSmallLogo,
    bookSelected,
  });
}


// which functions will be exported
const functionsToExport = {
  changeSelectedBook,
  closeSummary,
  selectLimitDate,
  lendABook,
}

const mapDispatchToProps =  dispatch => (bindActionCreators(functionsToExport,dispatch))

export default (connect(mapStateToProps,mapDispatchToProps)(OverlayBookContainer));