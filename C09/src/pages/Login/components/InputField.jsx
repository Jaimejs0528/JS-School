/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-unresolved */
import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import injectSheet from 'react-jss'

import { stylesFields } from '../styles/login';

const field = ({classes, icon, label, value, handleErrors, fieldHandler, ...rest}) => {
  return (
    <div className={`${classes.fieldContainer} ${rest.data.error ? classes.error: null}`}>
      <label htmlFor={label}>
        {label}
        <div className={classes.input}>
          <FontAwesomeIcon icon={icon} />
          <input
            id={label}
            onChange={fieldHandler}
            onBlur={fieldHandler}
            value={rest.data.value}
            {...rest}
          />
        </div>
      </label>
      <If condition={rest.data.error}>
        <span>{rest.data.error}</span>
      </If>
    </div>
  )
};

// Add css to component
const Field = injectSheet(stylesFields)(field);

class InputField extends Component {
  // When must re-render
  shouldComponentUpdate(nextProps) {
    const { data: { value, error } } = this.props;

    return (value !== nextProps.data.value  ||
      error !== nextProps.data.error);
  }

  render() {
    return(
      <Fragment>
        <Field {...this.props} {...this.state} />
      </Fragment>
    );
  }
}

export default InputField;
