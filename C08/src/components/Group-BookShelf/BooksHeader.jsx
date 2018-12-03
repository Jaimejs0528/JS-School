/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Class that compose all book Header viewMode and Title
class BooksHeader extends PureComponent {
  // Props Validations
  static propTypes = {
    title: PropTypes.string.isRequired,
    pagination: PropTypes.object.isRequired,
  }

  // jsx for view mode icons
  viewMode = () => {
    return (
      <div className="view-books">
        <FontAwesomeIcon icon="th-large" />
        <FontAwesomeIcon icon="th-list" />
      </div>);
  }

  render() {
    const { title, pagination } = this.props;
    
    return (
      <div className="books-header">
        <h2 className="books-header-title">{title}</h2>
        <div className="books-pagination">
          <Link to={{pathname: location.pathname, search:`?page=${pagination.currentPage - 1}`}}>&larr;</Link>
          <span>{`Page ${pagination.currentPage} of ${pagination.totalPages}`}</span>
          <Link to={{pathname: location.pathname, search:`?page=${pagination.currentPage + 1}`}}>&rarr;</Link>
        </div>
        {this.viewMode()}
      </div>);
  }
}

export default BooksHeader;
