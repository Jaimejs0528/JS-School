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
    changeSelectedBook: PropTypes.func.isRequired,

  }
  
  constructor(props) {
    super(props);
    this.state = {
      addLend: false,
    };
  }

  showByISBN = () => {
    const { bookData,changeSelectedBook, bookSelected } = this.props;
    if(bookSelected === bookData.bookinfo.isbn) {
      changeSelectedBook(-1);
    } else {
      changeSelectedBook(bookData.bookinfo.isbn);
    }
  }

  // Toggle between show or not lend icon
  showLendIcon =() => {
    this.setState(previous => ({ addLend: !previous.addLend }));
  }

  //Lend a book
  lendABookDate = (date) => {
    const { lendABook, bookData } = this.props;
    lendABook(bookData.bookinfo.isbn, date);
  }

  render() {
    const { bookData, closeSummary, bookSelected } = this.props;
    const {  addLend } = this.state;
      // console.log(this.props);

    return (
      <div className="overlay-container">
        <Book
          bookData={bookData}
          showSummary={this.showByISBN}
          bookSelected={bookSelected}
          addLend={addLend} />
        <OverlaySummary
          bookInfo={bookData.bookinfo}
          showByISBN={bookSelected}
          closeSummary={closeSummary}
          showLendIcon={this.showLendIcon}
          lendABook={this.lendABookDate}
        />
      </div>
    );
  }
}

export default OverlayBookContainer;
