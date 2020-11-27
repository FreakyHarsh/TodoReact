import { useState } from 'react';
import './App.css';

function App() {
  const [isLightTheme, setisLightTheme] = useState(true);
  const [theme, setTheme] = useState('light');

  const toggler = () => {
    setisLightTheme(!isLightTheme);
  };

  return (
    <div className="App">
      <div className={isLightTheme ? 'light bg' : 'dark bg'}>
        <p>Toggler theme is here</p>
      </div>
      <button onClick={toggler}>{isLightTheme ? 'Dark' : 'Light'}</button>
      <p className={theme + ' bg'}>Theme toggler for selected radio buttons</p>
      <input type="radio" name="theme" value="blue" id="blue" onClick={(e) => setTheme(e.target.value)} />
      <label htmlFor="blue">Blue</label>
      <input type="radio" name="theme" value="dark" id="dark" onClick={(e) => setTheme(e.target.value)} />
      <label htmlFor="dark">Dark</label>
      <input type="radio" name="theme" value="white" id="white" onClick={(e) => setTheme(e.target.value)} />
      <label htmlFor="white">White</label>
      <br />
    </div>
  );
}

export default App;
