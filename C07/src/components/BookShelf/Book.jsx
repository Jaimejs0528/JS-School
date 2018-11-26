import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ImageContainer from './ImageContainer';
import Rating from './Rating';
import { MAX_NUMB_STARS } from '../../utils/constants'

class Book extends PureComponent {
  render() {
    const { bookInfo, showSummary, addLend } = this.props;
    return (
      <div className="book">
        <ImageContainer imgBook={bookInfo.image} addLend={addLend} rating={bookInfo.rating} showSummary={showSummary} />
        <span className="book-title hidde-overflow-text">{bookInfo.title}</span>
        <span className="author hidde-overflow-text">{bookInfo.author}</span>
        <Rating rating={bookInfo.rating} maxNumberStars={MAX_NUMB_STARS}/>
      </div>
    );
  }
}

export default Book;