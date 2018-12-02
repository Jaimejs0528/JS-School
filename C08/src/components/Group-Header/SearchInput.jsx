import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Input search to filter books
class SearchInput extends PureComponent {
  // Props Validations
  static propTypes = {
    getInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

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

export default SearchInput;
