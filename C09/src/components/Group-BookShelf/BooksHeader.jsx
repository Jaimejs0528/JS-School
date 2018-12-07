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
    pagination: PropTypes.object,
  }

  // when haven't books
  static defaultProps = {
    pagination: {
      totalItems: 0,
      totalPages: 1,
      currentPage: 1,
      pageSize: 15
    }
  }

  // jsx for view mode icons
  viewMode = () => {
    return (
      <div className="view-books">
        <FontAwesomeIcon icon="th-large" />
        <FontAwesomeIcon icon="th-list" />
      </div>);
  }

  // get the page for show in header
  getPage = (currentPage, totalPages, next = true) => {
    if(next) {
      return (currentPage < totalPages) ? currentPage + 1 : totalPages;
    }
    return (currentPage > 1) ? currentPage - 1 : currentPage;
  }

  render() {
    const { title, pagination } = this.props;
    return (
      <div className="books-header">
        <h2 className="books-header-title">{title}</h2>
        <div className="books-pagination">
          <Link to={{pathname: location.pathname, search:`?page=${this.getPage(pagination.currentPage,pagination.totalPages, false)}`}}>&larr;</Link>
          <span>{`Page ${pagination.currentPage? pagination.currentPage : 1} of ${pagination.totalPages ?pagination.totalPages : 1}`}</span>
          <Link to={{pathname: location.pathname, search:`?page=${this.getPage(pagination.currentPage,pagination.totalPages)}`}}>&rarr;</Link>
        </div>
        {this.viewMode()}
      </div>);
  }
}

export default BooksHeader;
