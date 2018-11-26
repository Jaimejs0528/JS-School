import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ParagraphSummary extends PureComponent {
  render() {
    const { description } = this.props;
    return (
      <div className="book-paragraph">
        <span>SUMMARY</span>
        <p className="summary-paragraph" >{description}</p>
      </div>
    );
  }

}

ParagraphSummary.propTypes = {
  description: PropTypes.string.isRequired,
}

export default ParagraphSummary;
