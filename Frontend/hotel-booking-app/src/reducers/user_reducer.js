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

const user_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, user_loading: true };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    const data = action.payload;
    const user = {
      username: data.username,
      email: data.email,
      role: data.role,
    };
    console.log('Data from LOGIN_USER_SUCCESS: ' + user.username);
    localStorage.setItem('token', data.token);

    return {
      ...state,
      user_loading: false,
      user: {
        ...state.user,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return { ...state, user_loading: false, user_error: true };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      register_user_loading: true,
      register_user_error: false,
    };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    const data = action.payload;
    const user = {
      username: data.username,
      email: data.email,
      role: data.role,
    };
    return {
      ...state,
      register_user_loading: false,
      user: {
        ...state.user,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      register_user_loading: false,
      register_user_error: true,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default user_reducer;
