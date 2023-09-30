import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './component/About.js';
import Home from './component/Home.js';
import Receipe from './component/Receipe.js';
import Navbar from './component/Navbar.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/receipe" element={<Receipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;