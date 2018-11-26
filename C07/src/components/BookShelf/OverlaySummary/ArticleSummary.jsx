import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import HeaderSummary from './HeaderSummary';
import ParagraphSummary from './ParagraphSummary';
import RatingSummary from './RatingSummary';

class ArticleSummary extends PureComponent {
  render() {
    const { bookInfo } = this.props;
    return (
      <article className="summary-container">
        <HeaderSummary bookInfo={bookInfo}/>
        <ParagraphSummary description={bookInfo.description}/>
        <RatingSummary rating={bookInfo.rating}/>
      </article>
    );
  }

}

ArticleSummary.propTypes = {
  bookInfo: PropTypes.object.isRequired,
}

export default ArticleSummary;
