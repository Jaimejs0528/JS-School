/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss'

import { styles } from './styles/notFound';

const NotFoundComponent = ({ classes }) => 
(
  <div className={classes.container}>
    <div className={classes.noFoundContainer}>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/home">Go Back!</Link>
    </div>
  </div>
);

const NotFound = injectSheet(styles)(NotFoundComponent);

export default NotFound;