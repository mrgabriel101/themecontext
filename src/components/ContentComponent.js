import React from 'react';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

const ContentComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      Current theme {theme}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ContentComponent;
