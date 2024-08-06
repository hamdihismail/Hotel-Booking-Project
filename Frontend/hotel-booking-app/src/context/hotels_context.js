import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/hotels_reducer';
import { hotels_url as url } from '../utils/constants';
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

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchHotels = async (url) => {
    dispatch({ type: GET_HOTELS_BEGIN });
    try {
      const resp = await axios.get(url);
      const hotels = resp.data;
      dispatch({ type: GET_HOTELS_SUCCESS, payload: hotels });
    } catch (error) {
      dispatch({ type: GET_HOTELS_ERROR });
    }
  };
  const fetchSingleHotel = async (url) => {
    dispatch({ type: GET_SINGLE_HOTEL_BEGIN });
    try {
      const resp = await axios.get(url);
      const singleHotel = resp.data;
      dispatch({ type: GET_SINGLE_HOTEL_SUCCESS, payload: singleHotel });
    } catch (error) {
      dispatch({ type: GET_SINGLE_HOTEL_ERROR });
    }
  };

  useEffect(() => {
    fetchHotels(url);
  }, []);

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
