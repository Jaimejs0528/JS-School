import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';

class LendIcon extends PureComponent {
  render() {
    const { backgroundImg } = this.props;
    return (
      <div className="lend-book">
        <img src={backgroundImg} alt="lend-icon" />
        <FontAwesomeIcon icon={faUserCheck} />
      </div>
    );
  }
}

LendIcon.propTypes = {
  backgroundImg: PropTypes.string.isRequired,
};

export default LendIcon;
