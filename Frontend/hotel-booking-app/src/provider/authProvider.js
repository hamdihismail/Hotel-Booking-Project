import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useUserContext } from '../context/user_context';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(null);
  //   const [token, setToken_] = useState(() => localStorage.getItem('token'));

  const [loading, setLoading] = useState(true); // Add loading state

  const { user } = useUserContext();

  // Function to set the authentication token
  const setToken = (newToken) => {
    setToken_(newToken);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken_(storedToken);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + storedToken;
    }
    setLoading(false); // Set loading to false after initialization
  }, []);

  useEffect(() => {
    if (user.username != '') {
      setToken(localStorage.getItem('token'));
    }
    setLoading(false); // Set loading to false after initialization
  }, [user]);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      localStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
    }
  }, [token]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      loading, // Pass loading state to context
    }),
    [token, loading]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
