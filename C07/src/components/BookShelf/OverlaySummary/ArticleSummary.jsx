import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import HeaderSummary from './HeaderSummary';
import ParagraphSummary from './ParagraphSummary';
import RatingSummary from './RatingSummary';

// Class to show all Book summary
class ArticleSummary extends PureComponent {
  render() {
    const { bookInfo } = this.props;
    return (
      <article className="summary-container">
        <HeaderSummary bookInfo={bookInfo} />
        <ParagraphSummary description={bookInfo.description} />
        <RatingSummary rating={bookInfo.rating} />
      </article>
    );
  }
}

// Props Validations
ArticleSummary.propTypes = {
  bookInfo: PropTypes.object.isRequired,
};

export default ArticleSummary;
