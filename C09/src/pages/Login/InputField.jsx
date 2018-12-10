/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { regEx,
IS_EMPTY_ERROR,
INVALID_EMAIL_FORMAT,
MAX_LENGTH,
validateReGex
} from 'utils/tools';

class InputField extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      value: '',
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    const { error, value } = this.state;
    return (error !== nextState.error ||
      value !== nextState.value);
  }

  // Validates if the field doesn't accomplish some rule
  handleErrors = (e = null) => {
    const { name } = this.props;
    if(e && e.target.value){
      const value = e.target.value;
      const errorLengthExceed = (validateReGex(regEx.limitOvercame, value)) ? 
      MAX_LENGTH : null;

      this.setState({error: errorLengthExceed});
      if (name == 'email'){
        const errorEmail = (!validateReGex(regEx.invalidEmail,value)) ?
        INVALID_EMAIL_FORMAT : null;

        if(errorEmail) {
          this.setState({error: errorEmail});
        }
        else {
          this.setState({error: errorLengthExceed});
        }
      }

      if(errorLengthExceed) {
        this.setState({error: errorLengthExceed});
      }
      else {
        this.setState({value});
      }
    } else {
      this.setState({
        error: IS_EMPTY_ERROR,
        value: '',
      });
    }
  }

  render() {
    const {icon, label, ...rest } = this.props
    const { value, error } = this.state;

    return(
      <div className={`fieldContainer ${error ? 'error': ''}`}>
        <label htmlFor={label}>
          {label}
          <div className="input">
            <FontAwesomeIcon icon={icon} />
            <input
              id={label}
              onChange={this.handleErrors}
              onBlur={this.handleErrors}
              value={value}
              {...rest}
            />
          </div>
        </label>
        <If condition={error}>
          <span>{error}</span>
        </If>
      </div>
    );
  }
}

export default InputField;
