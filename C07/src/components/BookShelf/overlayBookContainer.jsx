import React, { PureComponent } from 'react';

import Book from './Book';
import OverlaySummary from './OverlaySummary/overlaySummary'

class OverlayBookContainer extends PureComponent {
  render() {
    const { bookInfo } = this.props;
    return (
      <div className="overlay-container">
        <Book bookInfo={bookInfo} />
        <OverlaySummary bookInfo={bookInfo} />
      </div>
    );
  }
}

export default OverlayBookContainer;
