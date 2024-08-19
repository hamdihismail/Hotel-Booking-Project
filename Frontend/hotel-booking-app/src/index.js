import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FilterProvider } from './context/filter_context';
import { HotelsProvider } from './context/hotels_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HotelsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </HotelsProvider>
  </React.StrictMode>
);
