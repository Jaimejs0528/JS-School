/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Input search to filter books
class SearchInput extends PureComponent {
  // Props Validations
  static propTypes = {
    getInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { getInput, onSubmit, classes } = this.props;
    return (
      <form className={classes['input-search']} onSubmit={onSubmit}>
        <FontAwesomeIcon icon="search" />
        <input type="search" name="Search" placeholder="Search..." aria-label="Search" onChange={getInput} />
      </form>
    );
  }
}

export default SearchInput;
