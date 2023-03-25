import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { withLoading } from 'hocs/withLoading.hoc';
import { ProtectedLayout } from './ProtectedLayout';

// Pages
import LoginPage from 'pages/login';
import { AuthProvider } from './AuthProvider';
import { Header } from 'components/header';
import NotificationToaster from 'components/toaster';
// Pages (lazy-loading)
const HomePage = React.lazy(() => import('pages/home'));
const Home = withLoading(HomePage);

export const BASIC_PATH = 'app';
export const LOGIN_PATH = 'login';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NotificationToaster />
        <Header />
        <Routes>
          <Route index element={<Navigate to={BASIC_PATH} replace />} />
          <Route path={BASIC_PATH} element={<ProtectedLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path={LOGIN_PATH}>
            <Route index element={<LoginPage />} />
          </Route>
          <Route path="*" element={<Navigate to={LOGIN_PATH} replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
