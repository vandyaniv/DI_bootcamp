import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(); // stock the the them  dark - light

function ThemeProvider({ children }) {
  // functionnal component

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('UseTheme  in ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };
