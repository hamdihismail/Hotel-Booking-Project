import React from 'react';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const HotelList = () => {
  const { filtered_hotels: hotels, grid_view } = useFilterContext();
  if (hotels.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no hotels matched your search...
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView hotels={hotels} />;
  }
  return <GridView hotels={hotels}>hotel list</GridView>;
};

export default HotelList;
