/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import smallLogo from 'images/favicon.png';
import bigLogo from 'images/logo.png';
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
    userPayload: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isSmallLogo: false,
      filter: '',
    };
  }

  // Remove window events and select the logo
  componentDidMount() {
    window.addEventListener('resize', this.screenHasChanged);
    this.changeLogoIcon(window.screen.width);
  }

  // Validates when must re-render
  shouldComponentUpdate(nextProps, nextState){
    const { isSmallLogo, filter } = this.state;
    const { getFilter } = this.props;
    return (isSmallLogo !== nextState.isSmallLogo) ||
      (getFilter !== nextProps.getFilter);
  }

  // Remove window events
  componentWillUnmount() {
    window.removeEventListener('resize', this.screenHasChanged);
  }

  // Prevent default
  onSubmit = (event) => {
    // const { match, location } = this.props;
    // const { filter } = this.state;
    // const query = location.search;
    // const url = (query.includes('?search=') || query.includes('&search=')) ? `${match.url}${filter}` :
    //   `${match.url}${location.search}/?search=${filter}`
    // console.log(url);

    event.preventDefault();
    // this.props.history.push(url);
  }

  // Get the input into the search Field
  getInput = (event) => {
    const { getFilter } = this.props;
    this.setState({filter:event.target.value});
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
    const { userPayload } = this.props;
    
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
        <UserInfo userName={userPayload.email} userIcon={userPayload.icon} />
      </div>
    );
  }
}

export default Header;
