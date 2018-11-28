import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ViewMode from './ViewMode';

// Class that compose all book Header viewMode and Title
class BooksHeader extends PureComponent {
  render() {
    const { title } = this.props;
    return (
      <div className="books-header">
        <h2 className="books-header-title">{title}</h2>
        <ViewMode />
      </div>);
  }
}

// Props Validations
BooksHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BooksHeader;
