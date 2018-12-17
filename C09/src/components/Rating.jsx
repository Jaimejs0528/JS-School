/* eslint-disable import/no-unresolved */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { STARS_ERROR, NOT_STARS } from 'utils/constants';

// Class that create the rating stars and show them
class Rating extends PureComponent {
  // Props Validations
  static propTypes = {
    rating: PropTypes.number.isRequired,
    maxNumberStars: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired,
  }

  chargeStars = () => {
    // Defining const to use
    const { rating, maxNumberStars } = this.props;
    const fullStars = Math.floor(rating);
    const extra = (rating - fullStars);
    const ratingReturn = [];

    // Validating if has rating
    if (rating === -1) {
      return (<span>{NOT_STARS}</span>);
    }

    // Validating rating value no overcome the max number of stars
    if (rating > maxNumberStars) {
      return (<span>{STARS_ERROR}</span>);
    }

    // Creating all stars
    for (let stars = 1; stars <= maxNumberStars; stars += 1) {
    const selectIcon = (stars <= fullStars) ? faStar :
      (stars === (fullStars + 1) && extra >= 0.5) ? faStarHalfAlt : farStar;
    ratingReturn.push(<FontAwesomeIcon icon={selectIcon} key={stars} />);
    }

    return ratingReturn;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.rating}>
        {this.chargeStars()}
      </div>
    );
  }
}

export default Rating;
