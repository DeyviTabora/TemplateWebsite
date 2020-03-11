import React from 'react';
import logo from './logo.svg';
import NavComponent from './components/NavComponent';
import CarouselComponent from './components/CarouselComponent'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <div id="carousel">
        <CarouselComponent />
      </div>
    </div>
  );
}

export default App;
