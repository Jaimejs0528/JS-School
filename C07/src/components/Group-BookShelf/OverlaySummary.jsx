/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ArticleSummary from './ArticleSummary';

// this is the overlay summary container
class OverlaySummary extends PureComponent {
  // Props Validations
  static propTypes = {
    bookInfo: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
    showLendIcon: PropTypes.func.isRequired,
    showSummary: PropTypes.func.isRequired,
  }

  render() {
    const { bookInfo, show, showLendIcon, showSummary } = this.props;
    
    return (
      <div 
        className={`overlay-summary ${show && 'show-summary'}`}
        onClick={showSummary}
        role="button"
        tabIndex="0"
      >
        {/* <div className="arrow" /> */}
        <div>
          <button type="button" onClick={showLendIcon} className="button-lend">lend</button>
          <ArticleSummary bookInfo={bookInfo} />
        </div>
      </div>
    );
  }
}

export default OverlaySummary;
