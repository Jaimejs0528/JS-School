import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ArticleSummary from './ArticleSummary';

class Summary extends PureComponent {
  render() {
    const { bookInfo } = this.props;
    return (
      <div>
        <ArticleSummary bookInfo={bookInfo} />
      </div>
    );
  }
}

export default Summary;