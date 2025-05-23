import { Navigate, useLocation } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="text-center text-lg font-semibold text-green-600">Loading...</div>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
