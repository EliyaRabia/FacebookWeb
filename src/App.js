import './App.css';
import RouterLinking from './RouterLinking'
import React, {useState} from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button className={darkMode ? 'dark-mode-button' : 'light-mode-button'} onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <RouterLinking>
      </RouterLinking>
    </div>
  );
}

export default App;
