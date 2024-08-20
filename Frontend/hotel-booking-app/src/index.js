import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FilterProvider } from './context/filter_context';
import { HotelsProvider } from './context/hotels_context';
import { UserProvider } from './context/user_context';
import AuthProvider from './provider/authProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <AuthProvider>
        <HotelsProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </HotelsProvider>
      </AuthProvider>
    </UserProvider>
  </React.StrictMode>
);
