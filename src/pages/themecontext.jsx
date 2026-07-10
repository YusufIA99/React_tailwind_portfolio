import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, THEMES } from '../context/theme.js';

const THEME_STORAGE_KEY = 'theme';

const GRADIENT_CLASSES = {
  [THEMES.DARK]: ['bg-gradient-to-r', 'from-gray-900', 'via-gray-800', 'to-black'],
  [THEMES.LIGHT]: ['bg-gradient-to-r', 'from-gray-200', 'via-gray-300', 'to-gray-400'],
};

const ALL_GRADIENT_CLASSES = Object.values(GRADIENT_CLASSES).flat();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(THEME_STORAGE_KEY) || THEMES.DARK
  );

  useEffect(() => {
    document.body.classList.remove(...ALL_GRADIENT_CLASSES);
    document.body.classList.add(...GRADIENT_CLASSES[theme]);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
