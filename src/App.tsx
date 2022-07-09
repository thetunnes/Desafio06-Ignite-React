import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SlideSwiper from "./components/Slide";
import Continent from "./pages/Continent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/slide" element={<SlideSwiper />} />
        <Route path="/continent/:chosenContinent" element={<Continent />} />
      </Routes>
    </Router>
  );
}

export default App;
