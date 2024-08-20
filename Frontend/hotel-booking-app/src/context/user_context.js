import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/user_reducer';
import { login_url, register_url } from '../utils/constants';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from '../actions';

const initialState = {
  isSidebarOpen: false,
  user_loading: false,
  user_error: false,
  user: {
    username: '',
    email: '',
    role: '',
  },
  register_user_loading: false,
  register_user_error: false,
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const loginUser = async (username, password) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const resp = await axios.post(login_url, {
        username: username,
        password: password,
      });
      const user = resp.data;
      dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: LOGIN_USER_ERROR });
    }
  };
  const registerUser = async (username, email, role, password) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const resp = await axios.post(register_url, {
        username: username,
        email: email,
        role: role,
        password: password,
      });
      const user = resp.data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR });
    }
  };

  //   useEffect(() => {
  //     loginUser('Tester', 'password');
  //   }, []);

  return (
    <UserContext.Provider
      value={{ ...state, openSidebar, closeSidebar, loginUser, registerUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
