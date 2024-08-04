import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark-gradient');

  useEffect(() => {
    document.body.classList.remove('bg-gradient-to-r', 'from-gray-900', 'via-gray-800', 'to-black', 'bg-gradient-to-r', 'from-gray-200', 'via-gray-300', 'to-gray-400');
    if (theme === 'dark-gradient') {
      document.body.classList.add('bg-gradient-to-r', 'from-gray-900', 'via-gray-800', 'to-black');
    } else {
      document.body.classList.add('bg-gradient-to-r', 'from-gray-200', 'via-gray-300', 'to-gray-400');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark-gradient' ? 'light-gradient' : 'dark-gradient'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
