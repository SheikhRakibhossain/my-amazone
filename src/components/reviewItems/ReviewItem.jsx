import React from 'react';
import './ReviewItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

// hello world
const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { id,  img, price, name, quantity } = product;
    console.log(id)

    return (
        <div className='review-item'>
            <img src={img} alt="product image" />
            <div className="review-details">
                <p>{name}</p>
                <p> Price: ${price}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <button onClick={() =>handleRemoveFromCart(id)} className='delete-btn'><FontAwesomeIcon icon={faTrash} />
            </button>

        </div>
    );
};

export default ReviewItem;