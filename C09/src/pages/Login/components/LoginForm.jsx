/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';
import injectSheet from 'react-jss'

import { stylesForm } from '../styles/login';
import InputField from './InputField';


const formContainer = ({classes, fieldHandler, data, errorServer, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <div className={classes.inputsContainer}>
        <InputField
          name="email"
          type="text"
          placeholder="name@email.com"
          label="Email"
          icon={faUser}
          fieldHandler={fieldHandler}
          data={data.email}
        />
        <InputField
          name="password"
          type="password"
          placeholder="Your password"
          label="Password"
          icon={faKey}
          fieldHandler={fieldHandler}
          data={data.password}
        />
      </div>
      <div className={`${classes.buttonContainer} ${classes.error}`}>
        <button className={classes.signInButton} type="submit">Sign In</button>
        <If condition={errorServer}>
          <span>{errorServer}</span>
        </If>
      </div>
    </form>
  )};

const Form = injectSheet(stylesForm)(formContainer);

class LoginForm extends Component {
  //Props validations
  static propTypes = {
    errorServer: PropTypes.string,
    signIn: PropTypes.func.isRequired,
    fieldHandler: PropTypes.func.isRequired,
    isAuth: PropTypes.any.isRequired,
    data: PropTypes.object.isRequired,
  }

  static defaultProps = {
    errorServer: null,
  }

  // When must re-render
  shouldComponentUpdate(nextProps) {
    const { errorServer, data } = this.props;

    return (
      data !== nextProps.data ||
      errorServer !== nextProps.errorServer);
  }

  // Call sign in service
  onSubmit = (e) => {
    e.preventDefault();
    const { data: { email, password }, fieldHandler, signIn } = this.props;

    if( email.value === password.value && email.value === '') {
      fieldHandler(null, 'email');
      fieldHandler(null, 'password');
      return;
    }
    // call service
    if (!(email.error || password.error)) signIn({email: email.value, password: password.value});
  }

  render(){
    const { isAuth, errorServer, fieldHandler, data } = this.props;

    return (
      <Choose>
        <When condition={isAuth}>
          <Redirect to="/home" />
        </When>
        <Otherwise>
          <Form
            errorServer={errorServer}
            fieldHandler={fieldHandler}
            data={data}
            onSubmit={this.onSubmit}
          />
        </Otherwise>
      </Choose>
    );
  }

}

export default LoginForm;