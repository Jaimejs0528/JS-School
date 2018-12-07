import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const redirectComponent = (isAuth, isNotAuthRoute, Component, props) => {
  return (
    <Choose>
      <When condition={!isAuth}>
        <Redirect to={isNotAuthRoute} />
      </When>
      <Otherwise>
        <Component {...props} />
      </Otherwise>
    </Choose>);
}

const redirect = (isAuth, isAuthRoute, isNotAuthRoute,props) => {
  return (
    <Choose>
      <When condition={!isAuth}>
        <Redirect to={isNotAuthRoute} />
      </When>
      <Otherwise>
        <Redirect to={isAuthRoute} {...props} />
      </Otherwise>
    </Choose>);
}

const ProtectedRoute = ({ isAuth, component, ...rest }) => {
  const toRender = (props) => redirectComponent(isAuth,"/home",component, props);
  return (
    <Route 
      {...rest}
      exact
      render={toRender}
    />
  );
}

export const ProtectedRouteRedirect = ({ isAuth, ...rest }) => {
  const toRender = (props) => redirect(isAuth,"/home","/login",props);
  return (
    <Route 
      {...rest}
      exact
      render={toRender}
    />
  );
}

export default ProtectedRoute;