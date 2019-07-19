import React from 'react';
import RestaurantBox from './components/restaurantbox/RestaurantBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>RANDOM RESTAURANT SELECTOR</h1>
        <em>Because we can't ever fucking decide..</em>
      </div>  
      <RestaurantBox />
    </div>
  );
}

export default App;
