import React from 'react';
import Coins from './Components/Coins/Coins';
import './App.css';

function App() {
  return (
    <div className="App">
      <Coins currency='usd' order='market_cap_desc' coins='10' priceChange='24h'></Coins>
    </div>
  );
}

export default App;
