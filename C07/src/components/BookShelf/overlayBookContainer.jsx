import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Book from './Book';
import OverlaySummary from './OverlaySummary/overlaySummary'

class OverlayBookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSummary:false,
      addLend: false,
    };
    this.showSummary = this.showSummary.bind(this);
    this.showLendIcon = this.showLendIcon.bind(this);
    this.getBoundaries = this.getBoundaries.bind(this);
  }

  showSummary(){
    this.setState((previous => ({openSummary: !previous.openSummary})));
  }

  showLendIcon(){
    this.setState((previous => ({addLend: !previous.addLend})));
  }

  getBoundaries(node){
    console.log(node.getBoundingClientRect());
  }

  render() {
    const { bookInfo } = this.props;
    const { openSummary, addLend } = this.state;
    return (
      <div className="overlay-container">
        <Book bookInfo={bookInfo} showSummary={this.showSummary} addLend={addLend} />
        <OverlaySummary ref={bookInfo.isbn} bookInfo={bookInfo} show={openSummary} showLendIcon={this.showLendIcon} />
      </div>
    );
  }
}

export default OverlayBookContainer;
