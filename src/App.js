
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Welcome to My Portfolio</h2>
    <p>This is the home page of my portfolio website.</p>
  </div>
);


export default App;
