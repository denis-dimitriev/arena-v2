import { useContext } from 'react';
import { UserContext } from '../context/user.context';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
  const {
    currentUser: { user }
  } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/" />;
};
