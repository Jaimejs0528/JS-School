/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import 'styles/login.scss'
import logoIcon from 'images/logo.png'
import { Auth } from 'utils/tools';
import LoginForm from 'pages/Login/LoginForm';

class Login extends PureComponent {
  render() {
    
    return(
      <Choose>
        <When condition={Auth()}>
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
