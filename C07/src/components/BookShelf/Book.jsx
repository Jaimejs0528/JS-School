import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ImageContainer from './ImageContainer';
import Rating from './Rating';
import { MAX_NUMB_STARS } from '../../utils/constants';

// Book information container 
class Book extends PureComponent {
  render() {
    const { bookData: {bookinfo, cities}, showSummary, addLend } = this.props;
    return (
      <div className="book">
        <ImageContainer
          imgBook={bookinfo.image}
          addLend={addLend}
          rating={bookinfo.rating}
          showSummary={showSummary}
        />
        <span className="book-title hidde-overflow-text">{bookinfo.title}</span>
        <span className="author hidde-overflow-text">{bookinfo.author}</span>
        <span className="cities hidde-overflow-text">{cities.join()}</span>
        <Rating rating={bookinfo.rating} maxNumberStars={MAX_NUMB_STARS} />
      </div>
    );
  }
}

// Props Validations
Book.propTypes = {
  bookData: PropTypes.object.isRequired,
  showSummary: PropTypes.func.isRequired,
  addLend: PropTypes.bool.isRequired,
};

export default Book;
