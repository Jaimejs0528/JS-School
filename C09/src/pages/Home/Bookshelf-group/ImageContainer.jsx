/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faBookOpen } from '@fortawesome/free-solid-svg-icons';

import { Auth } from 'utils/tools';
import background from 'images/reservation.png';
import { MAX_NUMB_STARS } from 'utils/constants';
import Rating from './Rating';

// Class that contains image and its overlay
class ImageContainer extends PureComponent {
  // Props Validations
  static propTypes = {
    imgBook: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    showSummary: PropTypes.func.isRequired,
    addLend: PropTypes.bool.isRequired,
    lends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  }

  // add lend icon to loan books
  lendsByUser = () => {
    const { lends } = this.props;
    const userPayload = Auth();
    const found = lends.filter((item) => item.userEmail ===userPayload.email);
    return found[0];
  }
  
  // Jsx for icon
  circleImg = (icon) => {
    return (
      <div className="child circle-img">
        <FontAwesomeIcon icon={icon} />
      </div>);
  }

  render() {
    const { imgBook, rating, showSummary, addLend } = this.props;

    const found = this.lendsByUser();
    return (
      <div onClick={showSummary} className="overlay-container img-container" role="button" tabIndex="0">
        <img className="img-border" src={imgBook} alt="book-img" width="176" height="250" />
        <div className={`lend-book ${(addLend || found) && 'show'}`}>
          <img src={background} alt="lend-icon" />
          <FontAwesomeIcon icon={faUserCheck} />
        </div>
        <div className="overlay-img book-options">
          {this.circleImg(faBookOpen)}
          <span>RATE THIS BOOK</span>
          <Rating rating={rating} maxNumberStars={MAX_NUMB_STARS} />
        </div>
      </div>
    );
  }
}

export default ImageContainer;
