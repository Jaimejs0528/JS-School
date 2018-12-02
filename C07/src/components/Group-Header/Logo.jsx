import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Class that contains the main logo
class Logo extends PureComponent {
  // Props Validations
  static propTypes = {
    logo: PropTypes.string.isRequired,
  };

  render() {
    const { logo } = this.props;

    return (
      <div className="sidebar header-logo">
        <img src={logo} alt="logo" />
      </div>
    );
  }
}

export default Logo;
