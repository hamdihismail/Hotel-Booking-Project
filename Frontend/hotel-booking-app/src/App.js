import React from 'react';
// import { BrowserRouter} from 'react-router-dom';
import { Footer, NewNav } from './components';
import AuthProvider from './provider/authProvider';
import MyRoutes from './routes';
function App() {
  return (
    <div>
      <MyRoutes />
    </div>
  );
}

export default App;
