import React from "react";
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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />

            {/* J'insère dans ma route Home mes routes About et error */}
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
    </div>
  );
}

export default App;
