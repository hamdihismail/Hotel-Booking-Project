import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';

export const ProtectedRoute = () => {
  const { token, loading } = useAuth();
  console.log('Token in ProtectedRoute:', token);

  if (loading) {
    // Optionally, return a loading indicator or null while checking the auth status
    return <div>Loading...</div>;
  }
  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};
