import React, {useEffect} from 'react';

import './InfoLine.css'

function InfoLine({coin}){
    let percentage = coin.price_change_percentage_24h;
    let maxSupply = parseInt(coin.max_supply) ?  parseInt(coin.max_supply).toLocaleString() : '-------'
    let supplyCirc = parseInt(coin.circulating_supply) ?  parseInt(coin.circulating_supply).toLocaleString() : '-------'
    let totSupply = parseInt(coin.total_supply) ? parseInt(coin.total_supply).toLocaleString() : '-------'
    
    return(
        <tr className='InfoLine'>
            <td className='info__rank'>#{coin.market_cap_rank.toLocaleString()}</td>
            <td className='info__name'> <img src={coin.image} className='info__logo'></img>{coin.name}<span>{coin.symbol}</span></td>
            <td className='info__price'>${coin.current_price.toLocaleString()}</td>
            <td className='info__24h'>{percentage.toFixed(2)}%</td>
            <td className='info__supply'>
                <div className='supply'>{supplyCirc} <span className='ticket'>{coin.symbol}</span></div>
                <div className='supply__hover'>
                 <p>Circ: {supplyCirc}<span className='ticket'>{coin.symbol}</span></p>
                 <p>TOT: {totSupply}<span className='ticket'>{coin.symbol}</span></p> 
                 <p>Max: {maxSupply}<span className='ticket'>{coin.symbol}</span></p></div>
            </td>
            <td className='info__volume'>${coin.total_volume.toLocaleString()}</td>
            <td className='info__marketcap'>${coin.market_cap.toLocaleString()}</td>
        </tr>
    );
}

export default InfoLine