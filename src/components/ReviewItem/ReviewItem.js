import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({product, heandlRmeoveItem}) => {
    const {id,img, name,price,shipping,quantity} = product; 
    return (
    <div className="reviewItem">
        <div> 
            <img src={img} alt="" />
        </div>
        
        <div className='reviewItem-details-container'>
           <div className='review-details'>
            <p>{name}</p>
            <p> <small>Price: ${price}</small></p>
            <p><small>Shipping: ${shipping}</small></p>
            <p><small>Quantity: {quantity}</small></p>

           </div>
           <div className='delete-container'>
                <button onClick={() => heandlRmeoveItem(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={ faTrash}></FontAwesomeIcon>
                </button>
            </div>  
        </div>
    </div>
    );
};

export default ReviewItem;