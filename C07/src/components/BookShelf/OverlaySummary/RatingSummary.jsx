import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Rating from '../Rating';
import { MAX_NUMB_STARS } from '../../../utils/constants';

// Container for the rating component into summarys
class RatingSummary extends PureComponent {
  render() {
    const { rating } = this.props;
    return (
      <div className="book-summary-rating">
        <span>RATING</span>
        <Rating rating={rating} maxNumberStars={MAX_NUMB_STARS} />
      </div>
    );
  }
}

// Props Validations
RatingSummary.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingSummary;
