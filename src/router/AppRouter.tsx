import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { withLoading } from 'hocs/withLoading.hoc';
import { ProtectedLayout } from './ProtectedLayout';

// Pages
import LoginPage from 'pages/login';
import { AuthProvider } from './AuthProvider';
import { Header } from 'components/header';
import NotificationToaster from 'components/toaster';
import Content from 'components/content';
// Pages (lazy-loading)
const HomePage = React.lazy(() => import('pages/home'));
const Home = withLoading(HomePage);

export const BASIC_PATH = '/home';
export const LOGIN_PATH = '/login';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NotificationToaster />
        <Header />
        <Content>
          <Routes>
            <Route index element={<Navigate to={BASIC_PATH} replace />} />
            <Route path={BASIC_PATH} element={<ProtectedLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path={LOGIN_PATH} element={<LoginPage />} />
            <Route path="*" element={<Navigate to={BASIC_PATH} replace />} />
          </Routes>
        </Content>
      </AuthProvider>
    </BrowserRouter>
  );
};
