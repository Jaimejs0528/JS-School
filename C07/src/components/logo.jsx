import React from 'react';
import PropTypes from 'prop-types';

class Logo extends React.PureComponent {
  render() {
    const { logo } = this.props;
    return (
      <div>
        <img src={logo} alt="logo" />
      </div>
    );
  }
}

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Logo;
