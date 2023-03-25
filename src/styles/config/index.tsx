import React, { useEffect } from 'react';
import { getStorage, setStorage } from 'storage/index';
import { ThemeProvider } from 'styled-components/macro';
import { WithChildrenProps } from 'types/generalTypes';

import { dark } from './dark';
import { light } from './light';

interface ThemeContextType {
  theme: string;
  toggle: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  toggle: () => {
    /**/
  },
});

export const useTheme = () => {
  const { theme, toggle } = React.useContext(ThemeContext);

  return { theme: theme === 'light' ? light : dark, toggle, themeName: theme };
};

export const StyledThemeProvider: React.FC<WithChildrenProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<string>(getStorage('theme') || 'light');
  const toggle = React.useCallback(() => setTheme((theme) => (theme === 'light' ? 'dark' : 'light')), []);
  const values = React.useMemo(
    () => ({
      theme,
      toggle,
    }),
    [toggle, theme],
  );
  useEffect(() => setStorage('theme', theme, true), [theme]);

  return (
    <ThemeContext.Provider value={values}>
      <ThemeProvider theme={theme === 'light' ? light : dark}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export * from './common';
export * from './dark';
export * from './light';
