import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class HeaderSummary extends PureComponent {
  render() {
    const { bookInfo } = this.props;
    return (
      <header className="header-summary">
        <div>
          <h1>{bookInfo.title}</h1>
          <span>{bookInfo.year}</span>
        </div>
        <h2>Novel by <span>{bookInfo.author}</span></h2>
        <p>{bookInfo.numPages} Pages</p>
      </header>
    );
  }

}

HeaderSummary.propTypes = {
  bookInfo: PropTypes.object.isRequired,
}

export default HeaderSummary;