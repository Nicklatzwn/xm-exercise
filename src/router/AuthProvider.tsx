import { WithChildrenProps } from 'types/generalTypes';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASIC_PATH, LOGIN_PATH } from './AppRouter';
import { setSession } from 'api/config/http.api';
import { getStorage, setStorage } from 'storage/index';
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

  const handleLogin = React.useCallback(
    (token: string, local: boolean) => {
      setToken(token);
      setStorage('token', token, local);
      setSession(token);
      navigate(BASIC_PATH);
      notificationController.success('Welcome!');
    },
    [navigate],
  );
  const handleLogout = React.useCallback(() => {
    setToken('');
    navigate(LOGIN_PATH);
  }, [navigate]);
  const values = React.useMemo(
    () => ({
      token,
      handleLogin,
      handleLogout,
    }),
    [handleLogin, handleLogout, token],
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
