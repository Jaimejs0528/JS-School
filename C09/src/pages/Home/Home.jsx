/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import injectSheet from 'react-jss';

import Header from 'pages/Home/components/Header/Header';
import Main from 'pages/Home/components/Bookshelf/Main';
import { Auth } from 'utils/tools';
import { stylesHeader } from './styles/header';


const HeaderContainer = injectSheet(stylesHeader)(Header);

// Main Class Contains all app
class Home extends Component {
  // Props Validations
  static propTypes  = {
    match: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }

  // When must re-render
  shouldComponentUpdate(nextState) {
    const { filter } = this.state;
    return (filter !== nextState.filter);
  }

  // Get the filter for books
  getFilter = (filter) => {
    this.setState({
      filter,
    });
  }

  render() {
    // Get props and state
    const { filter } = this.state;
    const userPayload = Auth();
    
    return (
      <div>
        <Choose>
          <When condition={!userPayload}>
            <Redirect to="/" />
          </When>
          <Otherwise>
            <HeaderContainer {...this.props} userPayload={userPayload} getFilter={this.getFilter} />
            <Main {...this.props} filter={filter} />
          </Otherwise>
        </Choose> 
      </div>);
  }
}

export default Home;
