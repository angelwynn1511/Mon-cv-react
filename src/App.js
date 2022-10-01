import React from "react";
import Switch from "react-switch";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Parcours from "./pages/Parcours";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error";
import Presentation from "./pages/Presentation";
import Contact from "./pages/Contact";
import SharedLayout from "./pages/SharedLayout";
// import logo from "./logo.svg";
import "./App.css";
import { createContext } from "react";
import { ThemeContext } from "@emotion/react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
export const themeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme =() => {
    setTheme((curr)=>(curr ==="light"? "dark" : "light"));

  }
  return (
    
    <ThemeContext.Provider value = {{theme, setTheme}}>
    <div className="App" id={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="parcours" element={<Parcours />} />
            <Route path="presentation" element={<Presentation />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* Tous les liens qui ne seront pas ceux du dessus enclencheront une erreur */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <div className="switchDiv">
          <Switch className="switch" onChange={toggleTheme} checked={theme=== "dark"} 
          onColor="#000" offColor="#000" offHandleColor="#fff" onHandleColor="#fff"
          uncheckedIcon={<NightlightRoundIcon className="moonIcon" />} checkedIcon={<WbSunnyIcon/>} 
          uncheckedHandleIcon={false} checkedHandleIcon={false}></Switch>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
