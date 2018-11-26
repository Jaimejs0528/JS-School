import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class UserInfo extends PureComponent {
  render() {
    const { userName, userIcon } = this.props;
    return (
      <div className="sidebar header-profile profile">
        <h3>{userName}</h3>
        <FontAwesomeIcon icon="angle-down" />
        <img className="circle-img" src={userIcon} alt={`icon-${userName}`} />
      </div>
    );
  }
}

UserInfo.propTypes = {
  userName: PropTypes.string.isRequired,
  userIcon: PropTypes.string.isRequired,
};

export default UserInfo;
