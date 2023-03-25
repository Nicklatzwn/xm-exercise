import { WithChildrenProps } from 'types/generalTypes';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASIC_PATH, LOGIN_PATH } from './AppRouter';
import { setAxiosSession } from 'api/config/http.api';
import { clearStorage, getStorage, setStorage } from 'storage/index';
import { isEmpty } from 'lodash';
import { notificationController } from 'controllers/notificationController';

interface AuthContextType {
  token: string;
  handleLogin: (token: string, local: boolean) => void;
  handleLogout: () => void;
}

const AuthContext = React.createContext<AuthContextType>({
  token: '',
  handleLogin: () => {
    /**/
  },
  handleLogout: () => {
    /**/
  },
});

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider: React.FC<WithChildrenProps> = ({ children }) => {
  const [token, setToken] = React.useState<string>(getStorage('token'));
  const navigate = useNavigate();

  const handleLogin = (token: string, local: boolean) => {
    setToken(token);
    setStorage('token', token, local);
    navigate(BASIC_PATH);
    notificationController.success('Welcome!');
  };
  const handleLogout = () => {
    setToken('');
    clearStorage('token');
    navigate(LOGIN_PATH);
  };
  const values = {
    token,
    handleLogin,
    handleLogout,
  };

  useEffect(() => {
    if (!isEmpty(token)) setAxiosSession(token);
  }, [token]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
