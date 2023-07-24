import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import RowCardsSection from './components/row-cards-section/RowCardsSection';
import Appointement from './components/appointment-section/Appointement';
import Services from './components/services/Services';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <RowCardsSection />
      <Appointement />
      <Services />
    </div>
  );
}

export default App;
