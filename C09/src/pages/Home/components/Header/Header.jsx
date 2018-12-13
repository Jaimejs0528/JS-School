/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import smallLogo from 'images/favicon.png';
import bigLogo from 'images/logo.png';
import { BOOKSHELF_TITLE } from 'utils/constants';
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
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    screenHasChanged: PropTypes.func.isRequired,
    showDropDown: PropTypes.bool.isRequired,
    openDropdown: PropTypes.func.isRequired,
    changeLogo: PropTypes.func.isRequired,
    isSmallLogo: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }

  // Remove window events and select the logo
  componentDidMount() {
    const { screenHasChanged, changeLogo } = this.props;
    window.addEventListener('resize', screenHasChanged);
    changeLogo(window.screen.width);
  }

  // Validates when must re-render
  shouldComponentUpdate(nextProps){
    const { isSmallLogo, showDropDown } = this.props;
    return (isSmallLogo !== nextProps.isSmallLogo ||
      showDropDown !== nextProps.showDropDown);
  }

  // Remove window events
  componentWillUnmount() {
    const { screenHasChanged } = this.props;
    window.removeEventListener('resize', screenHasChanged);
  }

  // calculate which params put in url
  calculateParams = (filter) => {
    const query = location.search;
    const temp=query.split('&');
    if(temp.length > 1) {
      const regEx = /search/i;
      const withoutFilter = temp.filter((item) => !regEx.test(item));
      return `${withoutFilter.join('&')}&search=${filter}`;
    }
    if(temp[0] !== ''){
      return `${temp[0]}&search=${filter}`
    }
    return `/?search=${filter}`;
  }

  // Prevent default
  onSubmit = (event) => {
    const { match, history } = this.props;
    const { filter } = this.state;
    const params = this.calculateParams(filter);

    event.preventDefault();
    history.push(`${match.url}${params}`);
  }

  // Get the input into the search Field
  getInput = (event) => {
    const { getFilter } = this.props;

    this.setState({filter: event.target.value});
    getFilter(event.target.value);
  }

  render() {
    const { userPayload, openDropdown, showDropDown, isSmallLogo, classes } = this.props;
    // console.log(this.props);
    return (
      <header className={classes['header-container']}>
        <Logo classes={classes} logo={isSmallLogo ? smallLogo : bigLogo} />
        <SearchContainer classes={classes}>
          <h1 className={classes.title}>{BOOKSHELF_TITLE}</h1>
          <SearchInput
            classes={classes}
            getInput={this.getInput}
            onSubmit={this.onSubmit}
          />
        </SearchContainer>
        <UserInfo
          classes={classes}
          showDropDown={showDropDown}
          openDropdown={openDropdown}
          userName={userPayload.name}
          userIcon={userPayload.icon}
        />
      </header>
    );
  }
}

export default Header;
