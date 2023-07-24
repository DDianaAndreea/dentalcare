import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import RowCardsSection from './components/row-cards-section/RowCardsSection';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <RowCardsSection />
    </div>
  );
}

export default App;
