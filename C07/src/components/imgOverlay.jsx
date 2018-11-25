import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

import Rating from './Rating';
import { MAX_NUMB_STARS } from '../utils/constants';
import CircleImg from './CircleImg';

class ImgOverlay extends PureComponent {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <CircleImg icon={faBookOpen} />
        <span>RATE THIS BOOK</span>
        <Rating rating={rating} maxNumberStars={MAX_NUMB_STARS} />
      </div>
    );
  }
}

ImgOverlay.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default ImgOverlay;
