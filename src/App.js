import React from 'react';
import Coins from './Components/Coins/Coins';
import './App.css';
import Header from './Components/Header/Header'
function App() {

  const parameter = {
    currency: 'usd',
    order: 'market_cap_desc',
    coins: '50',
    priceChange: '24h'
  };

  //market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc,volume_asc, volume_desc, id_asc, id_desc
  return (
    <div className="App">
      <Header></Header>
      <Coins currency={parameter.currency} order={parameter.order} coins={parameter.coins} priceChange={parameter.priceChange}></Coins>
    </div>
  );
}

export default App;
