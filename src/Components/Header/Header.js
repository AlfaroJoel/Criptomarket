import React from 'react'
import './Header.css'

function Header(){
    
    return(
        <div className='header'>
            <h1 className='logo'>CriptoMarket</h1>
            <div className='menu'>
                <a href='#'> Home </a>
                <a href='#'> DeFi</a>
                <a href='#'> NFT</a>
                <a href='#'> Exchanges</a>
                <a href='#'> Community</a>
            </div>
            <input type='text' placeholder='Search'></input>
        </div>
        
    )
}

export default Header;