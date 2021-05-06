import React from 'react';

import './InfoLine.css'

function InfoLine({coin}){
    const percentage = coin.price_change_percentage_24h;
    return(
        <tr className='InfoLine'>
            <td className='info__rank'>#{coin.market_cap_rank}</td>
            <td className='info__name'> <img src={coin.image} className='info__logo'></img>{coin.name}<span>{coin.symbol}</span></td>
            <td className='info__price'>${coin.current_price}</td>
            <td className='info__24h'>{percentage.toFixed(2)}%</td>
            <td className='info__supply'>{coin.circulating_supply} <span>{coin.symbol}</span></td>
            <td className='info__volume'>${coin.total_volume}</td>
            <td className='info__marketcap'>${coin.market_cap}</td>
        </tr>
    );
}

export default InfoLine