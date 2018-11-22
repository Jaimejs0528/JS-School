import React, { Component } from 'react';
import PropTypes from 'prop-types';

import smallLogo from '../assets/images/favicon.png';
import logo from '../assets/images/logo.png';
import LogoComp from './logo';
import { MD_VIEW, BOOKSHELF_TITLE } from '../utils/constants';
import SearchContainer from './searchContainer';

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
  }

  componentDidMount() {
    window.addEventListener('resize', this.screenHasChanged);
    this.changeLogoIcon();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.screenHasChanged);
  }

  getInput(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  screenHasChanged() {
    this.setState({
      screenX: window.innerWidth,
      // screenY: window.screen.height,
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
    // const { getInput } = this.props;
    return (
      <div>
        {isSmallLogo ? <LogoComp logo={smallLogo} /> : <LogoComp logo={logo} />}
        <h1>{this.state.inputValue}</h1>
        <SearchContainer title={BOOKSHELF_TITLE} getInput={this.getInput} />
      </div>
    );
  }
}

// Header.propTypes = {
//   getInput: PropTypes.func.isRequired,
// };

export default Header;
