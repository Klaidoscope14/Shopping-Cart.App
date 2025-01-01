import React from 'react';
import './Card.css';

const Card = ({ item, handleClick }) => {
  const { title, author, price, img } = item;

  return (
    <div className='cards'>
      <div className='image_box'>
        <img src={img} alt='Product' />
      </div>
      <div className='details'>
        <p className='title'>{title}</p>
        <p className='author'>by {author}</p>
        <p className='price'>Price: ₹{price}</p>
        <div className='card_buttons'>
          <button className='view_details'>View Details</button>
          <button className='add_to_cart' onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;