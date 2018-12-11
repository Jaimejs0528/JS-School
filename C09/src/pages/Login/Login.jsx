/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import injectSheet from 'react-jss'

import logoIcon from 'images/logo.png'
import { Auth } from 'utils/tools';
import LoginForm from 'pages/Login/LoginForm';
import { styles } from './styles/Login';

const container = ({ classes, ...rest }) => (
  <div className={classes.container}>
    <div className={classes.loginContainer}>
      <img src={logoIcon} alt="logo" width="178px" height="47px" />
      <LoginForm {...rest} /> 
    </div>
  </div>
);

const Container = injectSheet(styles)(container);

class Login extends PureComponent {
  
  render() {
    return (
      <Choose>
        <When condition={Auth()}>
          <Redirect to="/home" />
        </When>
        <Otherwise>
          <Container {...this.props} />
        </Otherwise>
      </Choose>
    );
  }
}

export default Login;
