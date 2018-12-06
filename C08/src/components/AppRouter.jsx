import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from 'components/Home';
import { ProtectedRouteRedirect } from 'components/ProtectedRoute';
import Login from './Group-Login/Login';

const decodeToken = (token) => {
  if(token){
    const payload = token.split('.')[1];
    const decode = JSON.parse(decodeURIComponent(escape(atob(payload))));
    return decode;
  }
  return null;
 
}

export const Auth = () => {
  const token  = localStorage.getItem("token");
  const tokenDecoded = decodeToken(token);
  return (tokenDecoded);
}

const noFound = () => {
  return (
    <div className="container">
      <div className="noFoundContainer">
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to="/home">Go Back!</Link>
      </div>
    </div>
    
  );
}

const AppRouter = () => {
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
        <Route component={noFound} />
      </Switch>
    </Router>);

}

export default AppRouter;