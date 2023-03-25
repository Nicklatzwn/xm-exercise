import React from 'react';
import { Navigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { LOGIN_PATH } from './AppRouter';
import { useAuth } from './AuthProvider';

export const ProtectedLayout: React.FC = () => {
  const { token } = useAuth();
  if (isEmpty(token)) {
    return <Navigate to={LOGIN_PATH} replace />;
  }
  return null;
};
