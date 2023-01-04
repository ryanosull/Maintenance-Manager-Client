import React, {useState} from "react";
import './App.css';
import Header from "./Header";


function App() {

  const[darkMode, setDarkMode] = useState(false)

  const handleDarkMode =()=> {setDarkMode(darkMode => !darkMode)}

  const appMode = darkMode ? "App dark" : "App light";
//not sure if appMode is necessary





  return (
    <div className={`${appMode}`}>
      <button className="darkmode-Button" onClick= {handleDarkMode}>{darkMode ? " Too bright? 🌕" : "Too dark? 🌑"} </button> 
      <Header/>
    </div>
  );
}

export default App;


