import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Singleset from '../Singleset/Singleset';
import './Shop.css';

const Shop = () => {
    const [headphones, setHeadphones] = useState([]);
    const [addSet, setaddSet] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setHeadphones(data))
    }, [])


    //button click handler function
    const eventHandler = (headset) => {
        const newSet = [...addSet, headset];
        setaddSet(newSet);
    }

    return (
        <div className='shop'>
            <div className='shop-box'>
                {
                    headphones.map(headset => <Singleset
                        key={headset.id}
                        headset={headset}
                        eventHandler={eventHandler}
                    ></Singleset>)
                }
            </div>

            <div className="order-box">
                <Order addSet={addSet}></Order>
            </div>

        </div>
    );
};

export default Shop;