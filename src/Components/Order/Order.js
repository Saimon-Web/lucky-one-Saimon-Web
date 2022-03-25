import React from 'react';
import './Order.css'

const Order = (props) => {
    const { addSet } = props;
    return (
        <div className='itemList'>
            <h1>Order List</h1>

            <div >
                <ul >
                    {
                        addSet.map(single => <li className='list'><img src={single.img} alt="" /> <h4>{single.name}</h4></li>)
                    }
                </ul>
                <div className='button'>
                    <button className='order-button'>CHOOSE 1 FOR ME</button> <br />
                    <button className='order-button'>Remove</button>
                </div>

            </div>
        </div>
    );
};

export default Order;