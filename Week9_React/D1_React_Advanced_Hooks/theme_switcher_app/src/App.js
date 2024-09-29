import React from 'react';
import './App.css';
import { useTheme } from './ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Changin theme </button>
      <p>Actuel theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Exemple </h1>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
