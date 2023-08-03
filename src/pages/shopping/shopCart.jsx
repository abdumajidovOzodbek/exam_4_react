// eslint-disable-next-line no-unused-vars
import React from 'react';
import './shop.css'
const ShopCart = (props) => {
    // eslint-disable-next-line react/prop-types
    const {image,title,price}=props.item
    return (
        <div className='fav'>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <h2>{price}</h2>
        </div>
    );
}

export default ShopCart;
