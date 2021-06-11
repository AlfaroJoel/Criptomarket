import React,{useState, useEffect}  from 'react';
import InfoLine from '../InfoLine/InfoLine';

import './Coins.css'


function Coins(props){
    const endpoint = 'https://api.coingecko.com/api/v3/coins/markets?';
    const currency = `vs_currency=${props.currency}`;
    const coinId = props.coin ? `&ids=${props.coin}` : '';
    const order = `&order=${props.order}` //market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc,volume_asc, volume_desc, id_asc, id_desc
    const coins = `&per_page=${props.coins}`;
    const params = '&page=1&sparkline=false';
    const priceChangue = `&price_change_percentage=${props.priceChangue}`; //1h, 24h, 7d, 14d, 30d, 200d, 1y
    const api = endpoint+currency+coinId+order+coins+params+priceChangue;
    //https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false&price_change_percentage=24h

    
    const [info, setInfo] = useState([]);

    useEffect(() =>{
        getData();
    }, [])

    const getData = async () => {
        const data = await fetch(api);
        const cripto = await data.json()
        setInfo(cripto);
    }

    return(
        <>
            <tr className='coins__header'>
                <th className='coins__rank'>#</th>
                <th className='coins__name'>Name</th>
                <th className='coins__price'>Price</th>
                <th className='coins__24h'>24h</th>
                <th className='coins__supply'>Circulating Supply</th>
                <th className='coins__volume'>Volume</th>
                <th className='coins__marketcap'>Market Cap</th>
            </tr>
            <div className='coin__list'>
                {
                    info.map((item) => (
                        <InfoLine key={item.market_cap_rank} coin={item}></InfoLine>
                    ))
                }
            </div>
       </>
    );
}

export default Coins;