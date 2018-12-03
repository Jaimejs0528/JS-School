/* eslint-disable import/no-unresolved */
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import '../../styles/login.scss'
import logoIcon from 'images/logo.png'
import LoginForm from './LoginForm';
import { Auth } from 'components/AppRouter';

class Login extends PureComponent {
  render() {
    const isAuth = Auth();
    return(
      <Choose>
        <When condition={isAuth}>
          <Redirect to="/home" />
        </When>
        <Otherwise>
          <div className="container">
            <div className="loginContainer">
              <img src={logoIcon} alt="logo" width="178px" height="47px" />
              <LoginForm /> 
            </div>
          </div>
        </Otherwise>
      </Choose>
    );
  }
}

export default Login;
