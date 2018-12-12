/* eslint-disable import/no-unresolved */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MAX_NUMB_STARS } from 'utils/constants';
import ImageContainer from './ImageContainer';
import Rating from 'components/Rating';

// Book information container 
class Book extends Component {
  // Props Validations
  static propTypes = {
    bookData: PropTypes.object.isRequired,
    showSummary: PropTypes.func.isRequired,
    addLend: PropTypes.bool.isRequired,
  }

  // When must re-render
  shouldComponentUpdate(nextProps) {
    const { bookData, addLend } = this.props;

    return (bookData.bookinfo !== nextProps.bookData.bookinfo ||
      bookData.cities !== nextProps.bookData.cities ||
      addLend !== nextProps.addLend);
  }
  
  render() {
    const { bookData: {bookinfo, cities, lends}, showSummary, addLend } = this.props;

    return (
      <div className="book">
        <ImageContainer
          imgBook={bookinfo.image}
          addLend={addLend}
          lends={lends}
          rating={bookinfo.rating}
          showSummary={showSummary}
        />
        <span className="book-title hide-overflow-text">{bookinfo.title}</span>
        <span className="author hide-overflow-text">{bookinfo.author}</span>
        <span className="cities hide-overflow-text">{cities.join(', ')}</span>
        <Rating rating={bookinfo.rating} maxNumberStars={MAX_NUMB_STARS} />
      </div>
    );
  }
}

export default Book;
