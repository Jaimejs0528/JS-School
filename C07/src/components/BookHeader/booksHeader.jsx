import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ViewMode from './ViewMode';


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

BooksHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BooksHeader;
