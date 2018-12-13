/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Header input search container
class SearchContainer extends PureComponent {
  // Props Validations
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { children, classes } = this.props;
    
    return (
      <div className={classes['header-search']}>
        {children}
      </div>
    );
  }
}

export default SearchContainer;
