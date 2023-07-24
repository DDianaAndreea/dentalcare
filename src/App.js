import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import RowCardsSection from './components/row-cards-section/RowCardsSection';
import Appointement from './components/appointment-section/Appointement';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <RowCardsSection />
      <Appointement />
    </div>
  );
}

export default App;
