import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Header input search container
class SearchContainer extends PureComponent {
  // Props Validations
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    const { children } = this.props;
    return (
      <div className="header-search">
        {children}
      </div>
    );
  }
}

export default SearchContainer;
