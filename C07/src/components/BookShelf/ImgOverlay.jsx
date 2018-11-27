import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

import Rating from './Rating';
import { MAX_NUMB_STARS } from '../../utils/constants';
import CircleImg from './CircleImg';

// Image Overlay
class ImgOverlay extends PureComponent {
  render() {
    const { rating } = this.props;
    return (
      <div className="overlay-img book-options">
        <CircleImg icon={faBookOpen} />
        <span>RATE THIS BOOK</span>
        <Rating rating={rating} maxNumberStars={MAX_NUMB_STARS} />
      </div>
    );
  }
}

// Props Validation
ImgOverlay.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default ImgOverlay;