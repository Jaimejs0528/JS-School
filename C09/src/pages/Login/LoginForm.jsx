/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

// import { signIn } from 'services/services';
import InputField from './InputField';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        email: '',
        password: '',
      },
      errorInputs: null,
    };
    this.email = React.createRef();
    this.password = React.createRef();
  }

  componentWillReceiveProps(nextProps){
    const { isAuth } = this.props;
    console.log("hola");
    console.log(isAuth, nextProps.isAuth);
    if (isAuth !== nextProps.isAuth) {
      console.log(isAuth, nextProps.isAuth,2);
    }
  }

  // When must re-render
  shouldComponentUpdate(nextProps, nextState) {
    const { errorInputs } = this.state;
    const {isAuth, errorServer } = this.props;

    return (isAuth !== nextProps.isAuth ||
      errorInputs !== nextState.errorInputs ||
      errorServer !== nextProps.errorServer);
  }

  

  // Call sign in service
  onSubmit = (e) => {
    e.preventDefault();
    const { value: valueEmail, error: errorEmail } = this.email.current.state;
    const { value: valuePass, error: errorPass } = this.password.current.state;
    const { signIn, isAuth } = this.props;
    // If all fields are valid
    if( valueEmail === valuePass && valueEmail === '') {
      this.email.current.handleErrors();
      this.password.current.handleErrors();
      return;
    }

    // Update state and call service
    this.setState({
      data: {
        email: valueEmail,
        password: valuePass,
      },
      errorInputs: (errorEmail || errorPass),
    }, () => {
      const { data, errorInputs } = this.state;
      if (!errorInputs) signIn(data);
    });
  }

  render(){
    const { isAuth } = this.props;
    const { errorServer } = this.props;
    // console.log(this.props);
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