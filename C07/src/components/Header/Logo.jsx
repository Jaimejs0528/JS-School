import React from 'react';
import PropTypes from 'prop-types';

// Class that contains the main logo
class Logo extends React.PureComponent {
  render() {
    const { logo } = this.props;
    return (
      <div className="sidebar header-logo">
        <img src={logo} alt="logo" />
      </div>
    );
  }
}

// Props Validations
Logo.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Logo;
