import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Summary from './Summary'

class OverlaySummary extends Component {
  render() {
    const { bookInfo, show, showLendIcon } = this.props;
    return (
      <div className={`overlay-summary ${show && "show-summary"}`}>
        <div className="arrow"></div>
        <Summary bookInfo={bookInfo} showLendIcon={showLendIcon}/>
      </div>
    );
  }

}

OverlaySummary.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
}

export default OverlaySummary;
