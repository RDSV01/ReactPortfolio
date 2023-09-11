import React from 'react';
import "../styles/ToggleDarkModeButton.css";

function ToggleDarkModeButton({ toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode} className='Darkmodebutton'>Changer de mode</button>
  );
}

export default ToggleDarkModeButton;
