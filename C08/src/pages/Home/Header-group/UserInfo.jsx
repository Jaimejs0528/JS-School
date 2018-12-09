import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Contains user icon and name
class UserInfo extends Component {
  // Props validations
  static propTypes = {
    userName: PropTypes.string.isRequired,
    userIcon: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  onClick = () => {
    this.setState((preState) => ({show: !preState.show}));
  }

  logOut = () => {
    localStorage.clear();
  }
  render() {
    const { userName, userIcon } = this.props;
    const { show } = this.state;
    
    return (
      <div className="sidebar header-profile">
        <div className="vertical-line" />
        <div onClick={this.onClick} className="profile">
          <h3 className="hide-overflow-text">{userName}</h3>
          <FontAwesomeIcon icon="angle-down" />
          <img className="circle-img" src={userIcon} alt={`icon-${userName}`} />
          <div className={`dropdown-logout ${show ? 'show' : ''}`}>
            <Link onClick={this.logOut} to="/login" >Logout</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
