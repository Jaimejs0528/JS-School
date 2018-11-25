import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import background from '../assets/images/reservation.png';
import LendIcon from './LendIcon';

class ImageContainer extends PureComponent {
  render() {
    const { imgBook, rating } = this.props;
    return (
      <div>
        <img src={imgBook} alt="book-img" />
        <LendIcon backgroundImg={background} />
        <imgOverlay rating={rating} />
      </div>
    );
  }
}

ImageContainer.propTypes = {
  imgBook: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ImageContainer;
