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
    classes: PropTypes.object.isRequired,
    changeSelectedBook: PropTypes.func.isRequired,
    closeSummary: PropTypes.func.isRequired,
    selectLimitDate: PropTypes.func.isRequired,
    position: PropTypes.number.isRequired,
  }

  showByISBN = () => {
    const { bookData,changeSelectedBook, bookSelected } = this.props;

    if (bookSelected === bookData.bookinfo.isbn) {
      changeSelectedBook(-1);
    } else {
      changeSelectedBook(bookData.bookinfo.isbn);
    }
  }

  //Lend a book
  lendABookDate = () => {
    const { lendABook, bookData,limitDate, position } = this.props;
    lendABook(bookData.bookinfo.isbn, limitDate, position);
  }

  render() {
    const { bookData,
      closeSummary,
      bookSelected,
      selectLimitDate,
      classes,
      limitDate } = this.props;

    return (
      <div className="overlay-container">
        <Book
          bookData={bookData}
          showSummary={this.showByISBN}
          bookSelected={bookSelected}
          classes={classes}
        />
        <OverlaySummary
          bookInfo={bookData.bookinfo}
          showByISBN={bookSelected}
          closeSummary={closeSummary}
          lendABook={this.lendABookDate}
          selectLimitDate={selectLimitDate}
          limitDate={limitDate}
          classes={classes}
        />
      </div>
    );
  }
}

export default OverlayBookContainer;
