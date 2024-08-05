import React, { useReducer, useContext, useEffect } from 'react';
import reducer from '../reducers/reducer';
import axios from 'axios';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  DARKMODE_ON,
  LIGHTMODE_ON,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_BEGIN,
  LOAD_DATA_ERROR,
} from '../actions';

const initialState = {
  isSidebarOpen: true,
  isDarkModeOn: false,
  data_loading: true,
  data_error: false,
};

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  const toggleLightMode = () => {
    dispatch({ type: LIGHTMODE_ON });
  };
  const toggleDarkMode = () => {
    dispatch({ type: DARKMODE_ON });
  };

  const fetchData = async () => {
    dispatch({ type: LOAD_DATA_BEGIN });
    try {
      // const resp = await axios.get('data.json');
      const resp = await axios.get('http://localhost:8080/api/');
      const data = resp.data;
      console.log(data);
      dispatch({ type: LOAD_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LOAD_DATA_ERROR });
    }
  };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        toggleLightMode,
        toggleDarkMode,
        fetchData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
