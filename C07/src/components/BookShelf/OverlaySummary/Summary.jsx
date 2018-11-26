import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ArticleSummary from './ArticleSummary';

class Summary extends PureComponent {
  render() {
    const { bookInfo, showLendIcon } = this.props;
    return (
      <div>
        <button onClick={showLendIcon} className="button-lend">lend</button>
        <ArticleSummary bookInfo={bookInfo} />
      </div>
    );
  }
}

export default Summary;