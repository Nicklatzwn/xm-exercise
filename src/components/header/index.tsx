import React from 'react';
import { useTheme } from 'styles/config';
import { Actions, Button, Container, Logo } from './styled';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useAuth } from 'router/AuthProvider';
import { isEmpty } from 'lodash';

export const Header: React.FC = () => {
  const { toggle, themeName } = useTheme();
  const { token, handleLogout } = useAuth();

  return (
    <Container>
      <Logo>
        <img
          src={themeName === 'dark' ? '/icons/xm-logo-dark.svg' : '/icons/xm-logo.png'}
          alt="XM Logo"
          height={30}
          width="auto"
        />
      </Logo>
      <Actions>
        {!isEmpty(token) && <Button onClick={handleLogout}>Log out</Button>}
        <DarkModeSwitch checked={themeName === 'dark'} onChange={toggle} />
      </Actions>
    </Container>
  );
};
