import {
  LOAD_HOTELS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_HOTELS,
  UPDATE_FILTERS,
  FILTER_HOTELS,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_HOTELS) {
    let maxPrice = action.payload
      .map((h) => h.rooms.map((r) => r.price))
      .flat();
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_hotels: [...action.payload],
      filtered_hotels: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) return { ...state, grid_view: true };
  if (action.type === SET_LISTVIEW) return { ...state, grid_view: false };
  if (action.type === UPDATE_SORT) return { ...state, sort: action.payload };
  if (action.type === SORT_HOTELS) {
    const { sort, filtered_hotels } = state;
    let tempHotels = [...filtered_hotels];
    if (sort === 'price-lowest') {
      // Function to sort hotels by lowest room price
      function sortHotelsByRoomPriceLow(hotels) {
        // Function to find the lowest room price in a hotel
        function getLowestRoomPrice(hotel) {
          return hotel.rooms.reduce((lowestPrice, room) => {
            return Math.min(lowestPrice, room.price);
          }, Infinity);
        }

        // Sort the hotels based on the lowest room price
        return hotels.sort(
          (a, b) => getLowestRoomPrice(a) - getLowestRoomPrice(b)
        );
      }
      tempHotels = sortHotelsByRoomPriceLow(tempHotels);
    }
    if (sort === 'price-highest') {
      // Function to sort hotels by highest room price
      function sortHotelsByRoomPriceHigh(hotels) {
        // Function to find the highest room price in a hotel
        function getHighestRoomPrice(hotel) {
          return hotel.rooms.reduce((highestPrice, room) => {
            return Math.min(highestPrice, room.price);
          }, Infinity);
        }

        // Sort the hotels based on the highest room price
        return hotels.sort(
          (a, b) => getHighestRoomPrice(b) - getHighestRoomPrice(a)
        );
      }
      tempHotels = sortHotelsByRoomPriceHigh(tempHotels);
    }
    if (sort === 'name-a') {
      tempHotels = tempHotels.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === 'name-z') {
      tempHotels = tempHotels.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_hotels: tempHotels };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_HOTELS) {
    const { all_hotels } = state;
    const { text, type, city, company, price } = state.filters;

    let tempHotels = [...all_hotels];
    // TEXT
    if (text) {
      tempHotels = tempHotels.filter((hotel) => {
        return hotel.name.toLowerCase().startsWith(text);
      });
    }
    // TYPE
    if (type !== 'all') {
      tempHotels = tempHotels.filter((hotel) => {
        if (hotel.rooms.map((room) => room.type).includes(type)) {
          return hotel;
        }
      });
    }
    // CITY
    if (city !== 'all') {
      tempHotels = tempHotels.filter((hotel) => hotel.city === city);
    }
    // COMPANY
    if (company !== 'all') {
      tempHotels = tempHotels.filter((hotel) => hotel.name === company);
    }

    // PRICE
    // Function to filter hotels by room price
    const filterHotelsByMaxRoomPrice = (hotels, maxPrice) => {
      // Function to check if a hotel has any room with price <= maxPrice
      const hasRoomWithinPrice = (hotel, maxPrice) => {
        return hotel.rooms.some((room) => room.price <= maxPrice);
      };

      // Filter hotels that have at least one room with price <= maxPrice
      return hotels.filter((hotel) => hasRoomWithinPrice(hotel, maxPrice));
    };

    tempHotels = filterHotelsByMaxRoomPrice(tempHotels, price);
    return { ...state, filtered_hotels: tempHotels };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        city: 'all',
        company: 'all',
        category: 'all',
        price: state.filters.max_price,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
