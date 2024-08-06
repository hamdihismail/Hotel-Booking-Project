import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import {
  LOAD_HOTELS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_HOTELS,
  UPDATE_FILTERS,
  FILTER_HOTELS,
  CLEAR_FILTERS,
} from '../actions';
import { useHotelsContext } from './hotels_context';

const initialState = {
  filtered_hotels: [],
  all_hotels: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    type: 'all',
    company: 'all',
    city: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { hotels } = useHotelsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_HOTELS, payload: hotels });
  }, [hotels]);

  useEffect(() => {
    dispatch({ type: FILTER_HOTELS });
    dispatch({ type: SORT_HOTELS });
  }, [hotels, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'type') {
      value = e.target.textContent;
    }
    if (name === 'price') {
      value = Number(value);
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
