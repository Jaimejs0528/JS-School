import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SearchInput from './searchInput';

class SearchContainer extends PureComponent {
  render() {
    const { title, getInput, onSubmit } = this.props;
    return (
      <div className="header-search">
        <h1 className="title">{title}</h1>
        <SearchInput
          getInput={getInput}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
}

SearchContainer.propTypes = {
  title: PropTypes.string.isRequired,
  getInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchContainer;
