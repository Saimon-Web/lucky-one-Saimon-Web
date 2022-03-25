import React from 'react';
import './Order.css'

const Order = (props) => {
    const { addSet } = props;
    const { oneSet } = props;

    return (
        <div className='itemList'>
            <h1>Order List</h1>

            <div >
                <ul >
                    {
                        addSet.map(single =>
                            <li className='list'><img src={single.img} alt="" />
                                <h4>{single.name}</h4>
                            </li>)
                    }
                </ul>
                <h3 className='choose'>Choosen One:{oneSet.name}</h3>

                <div className='button'>
                    <button onClick={props.oneHandler} className='order-button'>CHOOSE 1 FOR ME</button> <br />
                    <button onClick={props.removeHandler} className='order-button'>Remove</button>
                </div>

            </div>
        </div >
    );
};

export default Order;