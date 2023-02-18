import React from 'react';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import WeOffer from './components/We Offer/WeOffer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/weoffer" element={<WeOffer />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
