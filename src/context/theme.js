import { createContext, useContext } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const THEMES = {
  DARK: 'dark-gradient',
  LIGHT: 'light-gradient',
};
