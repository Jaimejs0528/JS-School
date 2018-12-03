/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Group-Header/Header';
import Main from 'components/Group-BookShelf/Main';
import { Auth } from 'components/AppRouter';
import { Redirect } from 'react-router-dom';

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
    location.search = `?search=${filter}`
    this.setState({
      filter,
    });
  }

  render() {
    // Get props and state
    const { filter } = this.state;
    const { match } = this.props;
    const userPayload = Auth();
    return (
      <div>
        <Choose>
          <When condition={!userPayload}>
            <Redirect to="/" />
          </When>
          <Otherwise>
            <Header userPayload={userPayload} getFilter={this.getFilter} />
            <Main match={match} filter={filter} />
          </Otherwise>
        </Choose> 
      </div>);
  }
}

export default Home;
