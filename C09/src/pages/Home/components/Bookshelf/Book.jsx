/* eslint-disable import/no-unresolved */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MAX_NUMB_STARS } from 'utils/constants';
import Rating from 'components/Rating';
import ImageContainer from './ImageContainer';

// Book information container 
class Book extends Component {
  // Props Validations
  static propTypes = {
    bookData: PropTypes.object.isRequired,
    showSummary: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  }

  // When must re-render
  shouldComponentUpdate(nextProps) {
    const { bookData } = this.props;
    return (bookData.bookinfo !== nextProps.bookData.bookinfo ||
      bookData.cities !== nextProps.bookData.cities);
  }
  
  render() {
    const { bookData: {bookinfo, cities, lends}, showSummary, classes } = this.props;

    return (
      <div className={classes.book}>
        <ImageContainer
          imgBook={bookinfo.image}
          lends={lends}
          rating={bookinfo.rating}
          showSummary={showSummary}
          classes={classes}
        />
        <span className={`${classes['book-title']} hide-overflow-text`}>{bookinfo.title}</span>
        <span className={`${classes.author} hide-overflow-text`}>{bookinfo.author}</span>
        <span className={`${classes.cities} hide-overflow-text`}>{cities.join(', ')}</span>
        <Rating classes={classes} rating={bookinfo.rating} maxNumberStars={MAX_NUMB_STARS} />
      </div>
    );
  }
}

export default Book;
