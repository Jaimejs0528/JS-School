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
  }
  constructor(props) {
    super(props);
    this.state = {
      openSummary: false,
      addLend: false,
    };
    this.showSummary = this.showSummary.bind(this);
    this.showLendIcon = this.showLendIcon.bind(this);
    // this.getBoundaries = this.getBoundaries.bind(this);
  }

  // toggle between show or not the overlay summary
  showSummary() {
    this.setState(previous => ({ openSummary: !previous.openSummary }));
  }

  // toggle between show or not lend icon
  showLendIcon() {
    this.setState(previous => ({ addLend: !previous.addLend }));
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
        />
      </div>
    );
  }
}

export default OverlayBookContainer;
