import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { STARS_ERROR } from '../utils/constants';

class Rating extends PureComponent {
  chargeStars() {
    const { rating, maxNumberStars } = this.props;
    if (rating > maxNumberStars) {
      return (<h1>{STARS_ERROR}</h1>);
    }
    const fullStars = Math.floor(rating);
    const extra = (rating - fullStars);
    const ratingRetorno = [];
    for (let i = 0; i < maxNumberStars; i += 1) {
      const stars = i + 1;
      if (stars > fullStars) {
        if (stars === (fullStars + 1) && extra >= 0.5) {
          ratingRetorno.push(<FontAwesomeIcon icon={faStarHalfAlt} key={stars} />);
        } else {
          ratingRetorno.push(<FontAwesomeIcon icon={farStar} key={stars} />);
        }
      } else {
        ratingRetorno.push(<FontAwesomeIcon icon={faStar} key={stars} />);
      }
    }
    return ratingRetorno;
  }

  render() {
    return (
      <div>
        {this.chargeStars.bind(this)()}
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxNumberStars: PropTypes.number.isRequired,
};

export default Rating;
