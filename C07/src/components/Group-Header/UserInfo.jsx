import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Contains user icon and name
class UserInfo extends PureComponent {
  // Props validations
  static propTypes = {
    userName: PropTypes.string.isRequired,
    userIcon: PropTypes.string.isRequired,
  };
  render() {
    const { userName, userIcon } = this.props;
    
    return (
      <div className="sidebar header-profile">
        <div className="vertical-line" />
        <div className="profile">
          <h3>{userName}</h3>
          <FontAwesomeIcon icon="angle-down" />
          <img className="circle-img" src={userIcon} alt={`icon-${userName}`} />
        </div>
      </div>
    );
  }
}

export default UserInfo;
