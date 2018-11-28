import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Summary from './Summary';

// this is the overlay summary container
class OverlaySummary extends PureComponent {
  render() {
    const { bookInfo, show, showLendIcon, showSummary } = this.props;
    return (
      <div 
      className={`overlay-summary ${show && 'show-summary'}`}
      onClick={showSummary}>
        {/* <div className="arrow" /> */}
        <Summary bookInfo={bookInfo} showLendIcon={showLendIcon} />
      </div>
    );
  }
}

// Props Validations
OverlaySummary.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  showLendIcon: PropTypes.func.isRequired,
};

export default OverlaySummary;
