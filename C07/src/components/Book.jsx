import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Book extends PureComponent {
  render() {
    const { bookTitle, author, rating } = this.props;
    return (
      <div>
        <ImageContainer />
        <span>{bookTitle}</span>
        <span>{author}</span>
        <Rating ratingValue={rating}/>
      </div>
    );
  }
}