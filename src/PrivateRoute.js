// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './context/AuthContext'; // Make sure to use your actual context

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = AuthContext(); // Get authentication status from your context

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
