import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Class that compose all book Header viewMode and Title
class BooksHeader extends PureComponent {
  // Props Validations
  static propTypes = {
    title: PropTypes.string.isRequired,
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
    const { title } = this.props;
    
    return (
      <div className="books-header">
        <h2 className="books-header-title">{title}</h2>
        {this.viewMode()}
      </div>);
  }
}

export default BooksHeader;
