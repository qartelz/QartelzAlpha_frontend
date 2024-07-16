import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const swal = require('sweetalert2');

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null
  );

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    const response = await fetch('http://127.0.0.1:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
      navigate('/home');
      swal.fire({
        title: 'Login Successful',
        icon: 'success',
        toast: true,
        timer: 6000,
        position: 'top-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      swal.fire({
        title: 'Username or Password does not exist.',
        icon: 'error',
        toast: true,
        timer: 6000,
        position: 'top-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    navigate('/');
    swal.fire({
      title: 'You have been logged out...',
      icon: 'success',
      toast: true,
      timer: 6000,
      position: 'top-right',
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens]);

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
