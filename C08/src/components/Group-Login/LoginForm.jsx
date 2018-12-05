import React, { Component } from 'react';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

import InputField from './InputField';

class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      errorServer: null,
      data: {
        email: '',
        password: '',
      },
      errorInputs: null,
      isAuth: false,
    };
    this.email = React.createRef();
    this.password = React.createRef();
  }

  signIn = async (data) => {
    const baseUrl = "https://localhost:4420/auth/sign_in";
    const request = {
      method: 'POST',
      headers:{'Content-Type': 'application/json',},
      body:JSON.stringify(data),
    }
    const result = await fetch(baseUrl,request);
    const jsonData = await result.json();
    const token = jsonData.token;
    if(token) {
      localStorage.setItem('token',token);
      this.setState({isAuth: true});
    }else {
      this.setState({errorServer: jsonData.message}) 
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { value: valueEmail, error: errorEmail } = this.email.current.state;
    const { value: valuePass, error: errorPass } = this.password.current.state;
    if( valueEmail === valuePass && valueEmail === '') {
      this.email.current.handleErrors();
      this.password.current.handleErrors();
      return;
    }
    this.setState({
      data: {
        email: valueEmail,
        password: valuePass,
      },
      errorInputs: (errorEmail || errorPass),
    }, () => {
      const { data, errorInputs } = this.state;
      if (!errorInputs) this.signIn(data)
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isAuth, errorInputs, errorServer } = this.state;

    return (isAuth !== nextState.isAuth) ||
      (errorInputs !== errorInputs) ||
      (errorServer !== errorInputs);
  }

  render(){
    const { isAuth, errorServer } = this.state;

    return (
      <Choose>
        <When condition={isAuth}>
          <Redirect to="/home" />
        </When>
        <Otherwise>
          <form onSubmit={this.onSubmit} className="form">
            <div className="inputsContainer">
              <InputField
                name="email"
                ref={this.email}
                type="text"
                placeholder="name@email.com"
                label="Email"
                icon={faUser}
              />
              <InputField
                name="password"
                ref={this.password}
                type="password"
                placeholder="Your password"
                label="Password"
                icon={faKey}
              />
            </div>
            <div className="buttonContainer error">
              <button className="signInButton" type="submit">Sign In</button>
              <If condition={errorServer}>
                <span>{errorServer}</span>
              </If>
            </div>
          </form>
        </Otherwise>
      </Choose>
    );
  }

}

export default LoginForm;