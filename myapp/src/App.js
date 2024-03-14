import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './pages/Dashboard';
import Comparing from './pages/Comparing';
import Timeline from './pages/Timeline';

const App = () => {
  return (
    <Router>
      <div className="container1">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/comparing" element={<Comparing />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

