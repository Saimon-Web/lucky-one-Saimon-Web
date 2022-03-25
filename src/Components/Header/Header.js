import React from 'react';
import './Header.css';

const Headder = () => {
    return (
        <div className='header'>

            <h1>HEADSET SHOP</h1>

            <div className='menu'>
                <a href="/Food">BRAND</a>
                <a href="/item list">Item List</a>
                <a href="/Buy">Buy</a>
            </div>

        </div>
    );
};

export default Headder;