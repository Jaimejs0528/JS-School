import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ArticleSummary from './ArticleSummary';

// This is the main container for summary
class Summary extends PureComponent {
  render() {
    const { bookInfo, showLendIcon } = this.props;
    return (
      <div>
        <button type="button" onClick={showLendIcon} className="button-lend">lend</button>
        <ArticleSummary bookInfo={bookInfo} />
      </div>
    );
  }
}

// Props Validations
Summary.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  showLendIcon: PropTypes.func.isRequired,
};

export default Summary;
