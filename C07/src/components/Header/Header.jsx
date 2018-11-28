import React, { Component } from 'react';
import PropTypes from 'prop-types';

import smallLogo from '../../assets/images/favicon.png';
import bigLogo from '../../assets/images/logo.png';
import userIcon from '../../assets/images/jakob.png';
import Logo from './Logo';
import { MD_VIEW, BOOKSHELF_TITLE } from '../../utils/constants';
import SearchContainer from './SearchContainer';
import UserInfo from './UserInfo';

// Prevent default
function onSubmit(event) {
  event.preventDefault();
  // console.log(event.target.querySelector('input').value);
}

// Contains all headers elements and their logic
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmallLogo: false,
      screenX: window.screen.width,
    };
    this.screenHasChanged = this.screenHasChanged.bind(this);
    this.changeLogoIcon = this.changeLogoIcon.bind(this);
    this.getInput = this.getInput.bind(this);
  }

  // Remove window events and select the logo
  componentDidMount() {
    window.addEventListener('resize', this.screenHasChanged);
    this.changeLogoIcon();
  }

  // Remove window events
  componentWillUnmount() {
    window.removeEventListener('resize', this.screenHasChanged);
  }

  // Get the input into the search Field
  getInput(event) {
    const { getFilter } = this.props;
    getFilter(event.target.value);
  }

  // Validates whne screen has changed
  screenHasChanged() {
    // Hide all overlay summaries open
    $('.overlay-summary').removeClass('show-summary').removeClass('change-sense');
    this.setState({
      screenX: window.innerWidth,
    }, this.changeLogoIcon.bind(this));
  }

  // Change Icon when screen resize
  changeLogoIcon() {
    const { screenX } = this.state;
    if (screenX < MD_VIEW) {
      this.setState({ isSmallLogo: true });
    } else {
      this.setState({ isSmallLogo: false });
    }
  }

  render() {
    const { isSmallLogo } = this.state;
    return (
      <div className="header-container">
        {isSmallLogo ? <Logo logo={smallLogo} /> : <Logo logo={bigLogo} />}
        <SearchContainer
          title={BOOKSHELF_TITLE}
          getInput={this.getInput}
          onSubmit={onSubmit}
        />
        <UserInfo userName="Jakob Treml" userIcon={userIcon} />
      </div>
    );
  }
}

// Props Validations
Header.propTypes = {
  getFilter: PropTypes.func.isRequired,
};

export default Header;
