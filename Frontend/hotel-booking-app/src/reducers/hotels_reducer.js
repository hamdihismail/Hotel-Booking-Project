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

const hotels_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_HOTELS_BEGIN) {
    return { ...state, hotels_loading: true };
  }
  if (action.type === GET_HOTELS_SUCCESS) {
    console.log('Hotels payload: ' + action.payload);

    return {
      ...state,
      hotels_loading: false,
      hotels: action.payload,
    };
  }
  if (action.type === GET_HOTELS_ERROR) {
    return { ...state, hotels_loading: false, hotels_error: true };
  }
  if (action.type === GET_SINGLE_HOTEL_BEGIN) {
    return {
      ...state,
      single_hotel_loading: true,
      single_hotel_error: false,
    };
  }
  if (action.type === GET_SINGLE_HOTEL_SUCCESS) {
    return {
      ...state,
      single_hotel_loading: false,
      single_hotel: action.payload,
    };
  }
  if (action.type === GET_SINGLE_HOTEL_ERROR) {
    return {
      ...state,
      single_hotel_loading: false,
      single_hotel_error: true,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default hotels_reducer;
