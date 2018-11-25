import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Book extends PureComponent {
  render() {
    const { bookTitle, author, rating, image } = this.props;
    return (
      <div>
        <ImageContainer imgBook={image} rating={rating} />
        <span>{bookTitle}</span>
        <span>{author}</span>
        <Rating ratingValue={rating}/>
      </div>
    );
  }
}