import React, { Component } from 'react';
import PropTypes from 'prop-types';

import smallLogo from '../assets/images/favicon.png';
import logo from '../assets/images/logo.png';
import userIcon from '../assets/images/jakob.png';
import LogoComp from './logo';
import { MD_VIEW, BOOKSHELF_TITLE } from '../utils/constants';
import SearchContainer from './searchContainer';
import UserInfo from './userInfo';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmallLogo: false,
      screenX: window.screen.width,
      inputValue: '',
    };
    this.screenHasChanged = this.screenHasChanged.bind(this);
    this.changeLogoIcon = this.changeLogoIcon.bind(this);
    this.getInput = this.getInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.screenHasChanged);
    this.changeLogoIcon();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.screenHasChanged);
  }

  onSubmit(event) {
    event.preventDefault();
    this.t = event;
    // console.log(event.target.querySelector('input').value);
  }

  getInput(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  screenHasChanged() {
    this.setState({
      screenX: window.innerWidth,
    }, this.changeLogoIcon.bind(this));
  }

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
    // const { onSubmit } = this.props;
    return (
      <div>
        {isSmallLogo ? <LogoComp logo={smallLogo} /> : <LogoComp logo={logo} />}
        <SearchContainer
          title={BOOKSHELF_TITLE}
          getInput={this.getInput}
          onSubmit={this.onSubmit}
        />
        <UserInfo userName="Jakob Treml" userIcon={userIcon} />
      </div>
    );
  }
}

// Header.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Header;
