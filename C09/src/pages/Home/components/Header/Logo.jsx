/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import  injectSheet from 'react-jss';


// Class that contains the main logo
class Logo extends PureComponent {
  // Props Validations
  static propTypes = {
    logo: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { logo, classes } = this.props;

    return (
      <div className={`sidebar ${classes['header-logo']}`}>
        <img src={logo} alt="logo" />
      </div>
    );
  }
}

export default Logo;
