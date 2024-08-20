import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/hotels_reducer';
import {
  hotels_url as url,
  single_hotel_url as url2,
} from '../utils/constants';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_HOTELS_BEGIN,
  GET_HOTELS_SUCCESS,
  GET_HOTELS_ERROR,
  GET_SINGLE_HOTEL_BEGIN,
  GET_SINGLE_HOTEL_SUCCESS,
  GET_SINGLE_HOTEL_ERROR,
} from '../actions';
import { useAuth } from '../provider/authProvider';

const initialState = {
  isSidebarOpen: false,
  hotels_loading: false,
  hotels_error: false,
  hotels: [],
  single_hotel_loading: false,
  single_hotel_error: false,
  single_hotel: {},
};
const testUrl = '../db/hotels.json';
const HotelsContext = React.createContext();

export const HotelsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { token, loading } = useAuth();
  // const api = axios.create({
  //   baseURL: 'http://localhost:8080', // This points to your proxy for API requests
  // });

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchHotels = async () => {
    dispatch({ type: GET_HOTELS_BEGIN });
    try {
      console.log('token from hotel context: ' + token);

      const resp = await axios.get(url);
      const hotels = resp.data;
      dispatch({ type: GET_HOTELS_SUCCESS, payload: hotels });
    } catch (error) {
      dispatch({ type: GET_HOTELS_ERROR });
    }
  };
  const fetchSingleHotel = async (id) => {
    dispatch({ type: GET_SINGLE_HOTEL_BEGIN });
    try {
      const resp = await axios.get(url2 + id);
      const singleHotel = resp.data;
      dispatch({ type: GET_SINGLE_HOTEL_SUCCESS, payload: singleHotel });
    } catch (error) {
      dispatch({ type: GET_SINGLE_HOTEL_ERROR });
    }
  };
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      localStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
    }
  }, [token]);
  useEffect(() => {
    fetchHotels(url);
  }, [token]);
  // useEffect(() => {
  //   fetchSingleHotel(url);
  // }, [state.hotels]);

  return (
    <HotelsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleHotel }}
    >
      {children}
    </HotelsContext.Provider>
  );
};
// make sure use
export const useHotelsContext = () => {
  return useContext(HotelsContext);
};
