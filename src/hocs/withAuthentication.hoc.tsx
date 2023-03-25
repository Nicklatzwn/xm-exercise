import React from 'react';
import { useAuth } from 'router/AuthProvider';
import { Navigate } from 'react-router-dom';

type ReturnType<T> = (props: T) => JSX.Element;

export const withAuthentication = <T extends object>(Component: React.ComponentType<T>): ReturnType<T> => {
  return (props: T) => {
    const { token } = useAuth();
    if (!token) {
      return <Component {...props} />;
    }
    return <Navigate to="/" replace />;
  };
};
