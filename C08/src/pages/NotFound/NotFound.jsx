import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <div className="noFoundContainer">
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to="/home">Go Back!</Link>
      </div>
    </div>
    
  );
}

export default NotFound;