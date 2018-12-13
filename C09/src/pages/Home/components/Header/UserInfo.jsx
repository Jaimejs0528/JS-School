/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
    showDropDown: PropTypes.bool.isRequired,
    openDropdown: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

  shouldComponentUpdate(nextProps) {
    const { showDropDown } = this.props;
    return ( showDropDown !== nextProps.showDropDown );
  }

  // Close the current session
  logOut = () => {
    localStorage.clear();
  }

  render() {
    const { userName, userIcon, openDropdown, showDropDown, classes } = this.props;
    return (
      <div className={`sidebar ${classes['header-profile']}`}>
        <div className={classes['vertical-line']} />
        <div onClick={openDropdown} className={classes.profile}>
          <h3 className="hide-overflow-text">{userName}</h3>
          <FontAwesomeIcon icon="angle-down" />
          <img className="circle-img" src={userIcon} alt={`icon-${userName}`} />
          <div className={`${classes['dropdown-logout']} ${showDropDown ?classes ['show'] : ''}`}>
            <Link onClick={this.logOut} to="/login">Logout</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
