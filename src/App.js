import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './pages/home';
import Gal from './pages/gallery';
import Contact from './pages/contactus';
import Room from './pages/room';
import About from './pages/about';
import Activities from './pages/activity';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />}/>
      <Route path="/gallery" element={<Gal/> }/>
      <Route path="/contact" element={<Contact/> }/>
      <Route path="/room" element={<Room/> }/>
      <Route path="/about" element={<About/> }/>
      <Route path="/activity" element={<Activities/> }/>
      {/* <Route path="/projects" element={<Projects />}/>
      <Route path="/about" element={<About />}/> */}
    </Routes>
  </Router>
  );
}

export default App;
