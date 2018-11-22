import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SearchInput from './searchInput';

class SearchContainer extends PureComponent {
  render() {
    const { title, getInput } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <SearchInput getInput={getInput} />
      </div>
    );
  }
}

SearchContainer.propTypes = {
  title: PropTypes.string.isRequired,
  getInput: PropTypes.func.isRequired,
};

export default SearchContainer;
