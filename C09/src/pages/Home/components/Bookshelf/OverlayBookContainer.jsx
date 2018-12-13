/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Book';
import OverlaySummary from './OverlaySummary';

// Class that contains book information and its overlaySummary
class OverlayBookContainer extends Component {
  // Prop Validations
  static propTypes = {
    bookData: PropTypes.object.isRequired,
    lendABook: PropTypes.func.isRequired,
    bookSelected: PropTypes.number.isRequired,
    limitDate: PropTypes.object,
    changeSelectedBook: PropTypes.func.isRequired,
    closeSummary: PropTypes.func.isRequired,
    showLendIcon: PropTypes.func.isRequired,
    selectLimitDate: PropTypes.func.isRequired,
    showLendI: PropTypes.bool.isRequired,
  }

  showByISBN = () => {
    const { bookData,changeSelectedBook, bookSelected } = this.props;
    if(bookSelected === bookData.bookinfo.isbn) {
      changeSelectedBook(-1);
    } else {
      changeSelectedBook(bookData.bookinfo.isbn);
    }
  }

  //Lend a book
  lendABookDate = () => {
    const { lendABook, bookData,limitDate } = this.props;
    lendABook(bookData.bookinfo.isbn, limitDate);
  }

  render() {
    const { bookData,
      closeSummary,
      bookSelected,
      showLendIcon,
      showLendI,
      selectLimitDate,
      limitDate } = this.props;
    return (
      <div className="overlay-container">
        <Book
          bookData={bookData}
          showSummary={this.showByISBN}
          bookSelected={bookSelected}
          addLend={showLendI}
        />
        <OverlaySummary
          bookInfo={bookData.bookinfo}
          showByISBN={bookSelected}
          closeSummary={closeSummary}
          showLendIcon={showLendIcon}
          lendABook={this.lendABookDate}
          selectLimitDate={selectLimitDate}
          limitDate={limitDate}
        />
      </div>
    );
  }
}

export default OverlayBookContainer;
