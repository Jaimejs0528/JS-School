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
  }
  
  constructor(props) {
    super(props);
    this.state = {
      openSummary: false,
      addLend: false,
    };
  }

  // Toggle between show or not the overlay summary
  showSummary = () => {
    this.setState(previous => ({ openSummary: !previous.openSummary }));
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
    const { bookData } = this.props;
    const { openSummary, addLend } = this.state;

    return (
      <div className="overlay-container">
        <Book bookData={bookData} showSummary={this.showSummary} addLend={addLend} />
        <OverlaySummary
          ref={bookData.bookinfo.isbn}
          bookInfo={bookData.bookinfo}
          show={openSummary}
          showSummary={this.showSummary}
          showLendIcon={this.showLendIcon}
          lendABook={this.lendABookDate}
        />
      </div>
    );
  }
}

export default OverlayBookContainer;
