import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Singleset from '../Singleset/Singleset';
import './Shop.css';

const Shop = () => {
    const [headphones, setHeadphones] = useState([]);
    const [addSet, setaddSet] = useState([]);
    const [oneSet, setoneSet] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setHeadphones(data))
    }, [])

    const oneHandler = () => {

        const newOne = addSet[Math.floor(Math.random() * addSet.length)];

        if (newOne) {
            setoneSet(newOne);
            setaddSet([]);
        }
        else {
            return;
        }


    }
    const removeHandler = () => {
        setaddSet([]);
        setoneSet([]);
    }
    //button click handler function
    const eventHandler = (headset) => {
        const newSet = [...addSet, headset];
        setaddSet(newSet);
    }

    return (
        <div className='shop'>
            <a className='order-scroll' href="#order">See order list</a>
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
                <Order
                    oneHandler={oneHandler}
                    oneSet={oneSet}
                    removeHandler={removeHandler}
                    addSet={addSet}></Order>
            </div>

        </div>
    );
};

export default Shop;