import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Summary from './Summary'

class OverlaySummary extends Component {
  render() {
    const { bookInfo } = this.props;
    return (
      <div className="overlay-summary">
        <div className="arrow"></div>
        <Summary bookInfo={bookInfo}/>
      </div>
    );
  }

}

OverlaySummary.propTypes = {
  bookInfo: PropTypes.object.isRequired,
}

export default OverlaySummary;
