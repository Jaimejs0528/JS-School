import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CircleImg extends PureComponent {
  render() {
    const { icon } = this.props;
    return (
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
    );
  }
}

CircleImg.propTypes = {
  icon: PropTypes.element.isRequired,
};

export default CircleImg;
