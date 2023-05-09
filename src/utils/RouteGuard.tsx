import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext,authContext } from '../context/Auth';
import React, { useContext } from 'react';

interface props {
    children : React.ReactNode;
}

export const RouteGuard = ({ children }: props) => {
  const location = useLocation()
  const {user} = useContext(AuthContext) as authContext;
  if (!user) {
    return <Navigate to='/' state={{ path: location.pathname }} />
  }
  return <>{children}</>;
}