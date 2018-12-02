/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';

import Header from 'components/Group-Header/Header';
import Main from 'components/Group-BookShelf/Main';

// Main Class Contains all app
class App extends Component {
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
    
    return (
      <div>
        <Header getFilter={this.getFilter} />
        <Main filter={filter} />
      </div>);
  }
}

export default App;
