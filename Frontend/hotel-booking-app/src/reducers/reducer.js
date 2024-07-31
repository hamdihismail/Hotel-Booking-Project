import {
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  DARKMODE_ON,
  LIGHTMODE_ON,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_BEGIN,
  LOAD_DATA_ERROR,
} from '../actions';

const global_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === DARKMODE_ON) {
    return { ...state, isDarkModeOn: true };
  }
  if (action.type === LIGHTMODE_ON) {
    return { ...state, isDarkModeOn: false };
  }
  if (action.type === LOAD_DATA_BEGIN) {
    return { ...state, data_loading: true };
  }
  if (action.type === LOAD_DATA_SUCCESS) {
    const data = action.payload;

    console.log('Data: ' + data);

    return {
      ...state,
      data_loading: false,
    };
  }
  if (action.type === LOAD_DATA_ERROR) {
    return { ...state, data_loading: false, data_error: true };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default global_reducer;
