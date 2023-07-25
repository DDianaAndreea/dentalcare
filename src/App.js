import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import RowCardsSection from './components/row-cards-section/RowCardsSection';
import Appointement from './components/appointment-section/Appointement';
import Services from './components/services/Services';
import Description from './components/description-section/Description';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className='hr'>
        <hr/>
      </div>
      <Home />
      <RowCardsSection />
      <Appointement />
      <Services />
      <Description />
    </div>
  );
}

export default App;
