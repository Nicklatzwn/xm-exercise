import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LOGIN_PATH } from './AppRouter';
import { useAuth } from './AuthProvider';

export const ProtectedLayout: React.FC<{ redirectPath?: string }> = ({ redirectPath = LOGIN_PATH }) => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
