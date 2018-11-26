import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';

// Class that contains lend icon to indicate a loan book
class LendIcon extends PureComponent {
  render() {
    const { backgroundImg, addLend } = this.props;
    return (
      <div className={`lend-book ${addLend && 'show'}`}>
        <img src={backgroundImg} alt="lend-icon" />
        <FontAwesomeIcon icon={faUserCheck} />
      </div>
    );
  }
}

// Props Validations
LendIcon.propTypes = {
  backgroundImg: PropTypes.string.isRequired,
  addLend: PropTypes.bool.isRequired,
};

export default LendIcon;
