import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
  createRoutesFromChildren,
} from 'react-router-dom';
import { Home, Error, About, Login, Hotels, Register } from '../pages';
import { useAuth } from '../provider/authProvider';
import { ProtectedRoute } from './ProtectedRoute';
import { Footer, NewNav } from '../components';

const MyRoutes = () => {
  const { token } = useAuth();

  return (
    <Router>
      <NewNav />
      <div className="overlay"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {!token ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route element={<ProtectedRoute />}>
            <Route path="/hotels" element={<Hotels />} />
          </Route>
        )}
      </Routes>
      <Footer />
    </Router>
  );
};

export default MyRoutes;
