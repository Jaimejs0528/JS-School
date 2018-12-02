/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import smallLogo from 'images/favicon.png';
import bigLogo from 'images/logo.png';
import userIcon from 'images/jakob.png';
import { MD_VIEW, BOOKSHELF_TITLE } from 'utils/constants';
import Logo from './Logo';
import SearchContainer from './SearchContainer';
import UserInfo from './UserInfo';
import SearchInput from './SearchInput';

// Contains all headers elements and their logic
class Header extends Component {
  // Props Validations
  static propTypes = {
    getFilter: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isSmallLogo: false,
    };
  }

  // Remove window events and select the logo
  componentDidMount() {
    window.addEventListener('resize', this.screenHasChanged);
    this.changeLogoIcon(window.screen.width);
  }

  // Validates when must re-render
  shouldComponentUpdate(nextState){
    const { isSmallLogo } = this.state;
    return (isSmallLogo !== nextState.isSmallLogo);
  }

  // Remove window events
  componentWillUnmount() {
    window.removeEventListener('resize', this.screenHasChanged);
  }

  // Prevent default
  onSubmit = (event) => {
    event.preventDefault();
  }

  // Get the input into the search Field
  getInput = (event) => {
    const { getFilter } = this.props;
    getFilter(event.target.value);
  }

  // Validates when screen has changed
  screenHasChanged = () => {
    // Hide all overlay summaries open
    $('.overlay-summary').removeClass('show-summary').removeClass('change-sense');
    this.changeLogoIcon(window.innerWidth);
  }

  // Change Icon when screen resize
  changeLogoIcon = (screenX) => {
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
        <Logo logo={isSmallLogo ? smallLogo : bigLogo} />
        <SearchContainer>
          <h1 className="title">{BOOKSHELF_TITLE}</h1>
          <SearchInput
            getInput={this.getInput}
            onSubmit={this.onSubmit}
          />
        </SearchContainer>
        <UserInfo userName="Jakob Treml" userIcon={userIcon} />
      </div>
    );
  }
}

export default Header;
