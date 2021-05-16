import './App.css';
import { Search } from './Components/SearchGifs/Search'
import { BtnDarkMode } from './Components/ButtonDarkMode/BtnDarkMode'
import { Mensaje } from './Components/Mensaje/Mensaje'
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const { darkMode } = useContext(AppContext);
  return (
    <div className={`App ${darkMode === true ? "darkmode" : "lightmode"}`}>
      <BtnDarkMode/>
      <Search/>
      <Mensaje/>
    </div>
  );
}

export default App;
