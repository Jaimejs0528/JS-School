import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Book options inside a circle
class CircleImg extends PureComponent {
  render() {
    const { icon } = this.props;
    return (
      <div className="child circle-img">
        <FontAwesomeIcon icon={icon} />
      </div>
    );
  }
}

// Props Validation
CircleImg.propTypes = {
  icon: PropTypes.object.isRequired,
};

export default CircleImg;
