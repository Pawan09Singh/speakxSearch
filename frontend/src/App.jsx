import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import QuerySearchQuestion from './Pages/QuerySearchQuestion/QuerySearchQuestion';

const App = () => {
  return (
    <div className="app-container">
      {/* Live Animated Background */}
      <div className="background-animation" />
      
      {/* Main App Content */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Search query Page */}
        <Route path="/search" element={<QuerySearchQuestion />} />
        {/* Question Page */}
      </Routes>
    </div>
  );
};

export default App;
