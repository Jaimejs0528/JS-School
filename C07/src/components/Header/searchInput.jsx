import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchInput extends PureComponent {
  render() {
    const { getInput, onSubmit } = this.props;
    return (
      <form className="input-search" onSubmit={onSubmit}>
        <FontAwesomeIcon icon="search" />
        <input type="search" name="Search" placeholder="Search..." aria-label="Search" onChange={getInput} />
      </form>
    );
  }
}

SearchInput.propTypes = {
  getInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchInput;
