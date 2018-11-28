import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Book';
import OverlaySummary from './OverlaySummary/OverlaySummary';

// Class that contains book information and its overlaySummary
class OverlayBookContainer extends Component {
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

  // getBoundaries(node){
  //   console.log(node.getBoundingClientRect());
  // }

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

// Prop Validations
OverlayBookContainer.propTypes = {
  bookData: PropTypes.object.isRequired,
};

export default OverlayBookContainer;
