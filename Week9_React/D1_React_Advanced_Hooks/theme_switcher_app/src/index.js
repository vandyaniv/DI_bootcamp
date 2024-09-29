import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider, useTheme } from './ThemeContext';

function BodyClassUptader() {
  const { theme } = useTheme();
  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return null;
}

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BodyClassUptader />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
export default BodyClassUptader;
