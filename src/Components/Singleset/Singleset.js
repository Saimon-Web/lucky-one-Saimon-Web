import React from 'react';
import './Singleset.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Singleset = (props) => {
    // console.log(props)
    const { eventHandler } = props;
    const { name, id, price, img } = props.headset;
    return (
        <div className='singleSet'>
            <img src={img} alt="" />
            <div className='single-info'>
                <h3>{name}</h3>
                <p>ID:{id}</p>
                <p>Price:{price}</p>
                <button className='btn' onClick={() => eventHandler(props.headset)} >Add to cart
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Singleset;