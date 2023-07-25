import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"

import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import PNF from "./pages/PageNotFound/PNF";


function App() {
  return (

    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />\
        <Route path="*" element={<PNF />} />
      </Routes>
      
    </>
    
  );
}

export default App;
