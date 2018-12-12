/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Auth } from 'utils/tools';
import { ProtectedRouteRedirect } from 'components/ProtectedRoute';
import NotFound from 'pages/NotFound/NotFound';
import Home from '../pages/Home/containers/Home';
import Login from '../containers/Login';

// Class that controls all routes
class App extends PureComponent {
  render(){

    return (
      <Router>
        <Switch>
          <ProtectedRouteRedirect
            isAuth={Auth()}
            exact
            path="/"
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/lends" component={Home} />
          <Route exact path="/home/digitals" component={Home} />
          <Route exact path="/home/cities/:city" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;