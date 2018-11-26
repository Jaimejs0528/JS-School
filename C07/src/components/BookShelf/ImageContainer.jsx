import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import background from '../../assets/images/reservation.png';
import LendIcon from './LendIcon';
import ImgOverlay from './imgOverlay';

class ImageContainer extends PureComponent {
  render() {
    const { imgBook, rating, showSummary, addLend } = this.props;
    return (
      <div onClick={showSummary} className="overlay-container img-container">
        <img className="img-border" src={imgBook} alt="book-img" width="176" height="250" />
        <LendIcon backgroundImg={background} addLend={addLend} />
        <ImgOverlay rating={rating} />
      </div>
    );
  }
}

ImageContainer.propTypes = {
  imgBook: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ImageContainer;
