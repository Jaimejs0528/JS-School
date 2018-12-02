/* eslint-disable import/no-unresolved */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Rating from 'components/Group-BookShelf/Rating';
import { MAX_NUMB_STARS } from 'utils/constants';

// Class to show all Book summary
class ArticleSummary extends PureComponent {
  // Props Validations
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    bookInfo: PropTypes.object.isRequired,
  }

  render() {
    const { bookInfo } = this.props;
    return (
      <article className="summary-container">
        <header className="header-summary">
          <div>
            <h1 className="hidde-overflow-text">{bookInfo.title}</h1>
            <span>{bookInfo.year}</span>
          </div>
          <h2>{`Novel by ${<span>{bookInfo.author}</span>}`}</h2>
          <p>
            {`${bookInfo.numPages} Pages`}
          </p>
        </header>
        <div className="book-paragraph">
          <span>SUMMARY</span>
          <p className="summary-paragraph">{bookInfo.description}</p>
        </div>
        <div className="book-summary-rating">
          <span>RATING</span>
          <Rating rating={bookInfo.rating} maxNumberStars={MAX_NUMB_STARS} />
        </div>
      </article>
    );
  }
}

export default ArticleSummary;
