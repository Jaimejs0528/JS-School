import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { STARS_ERROR } from '../utils/constants';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

class Rating extends PureComponent {
  chargeStars() {
    const { rating, maxNumberStars } = this.props;
    if (rating > maxNumberStars) {
      return (<div>{STARS_ERROR}</div>);
    }
    const fullStars = Math.floor(rating);
    const extra = rating - fullStars;
    const ratingRetorno;
    for (let i = 0; i < maxNumberStars; i += 1) {
      const stars = i + 1;
        if(stars > fullStars) {
          if(stars === (fullStars + 1) && extra >= 0.5){
            ratingRetorno += <FontAwesomeIcon icon={farStar} />
          }else {
            ratingRetorno += <FontAwesomeIcon icon={faStar} />
          }
        }
    }
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}