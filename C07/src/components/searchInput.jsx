import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchInput extends PureComponent {
  render() {
    const { getInput } = this.props;
    return (
      <form action="post">
        <FontAwesomeIcon icon="search" />
        <input type="search" placeholder="Search..." aria-label="Search" onChange={getInput} />
      </form>
    );
  }
}

SearchInput.propTypes = {
  getInput: PropTypes.func.isRequired,
};

export default SearchInput;
