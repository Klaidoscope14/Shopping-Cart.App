import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = ({ cart, setcart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
      setTotalPrice(total);
    };
    calculateTotal();
  }, [cart]);

  const handleQuantityChange = (id, increment) => {
    setcart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + increment) }
          : item
      )
    );
  };

  const handleRemove = id => {
    if (window.confirm('Are you sure you want to remove this item?')) {
      setcart(prevCart => prevCart.filter(item => item.id !== id));
    }
  };

  return (
    <div className='cart_container'>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className='cart_items'>
            {cart.map(item => (
              <div className='cart_box' key={item.id}>
                <div className='cart_img'>
                  <img src={item.img} alt={item.title} />
                  <p>{item.title}</p>
                </div>
                <div className='quantity_controls'>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                </div>
                <div className='item_price'>
                  <span>₹{item.price * (item.quantity || 1)}</span>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className='cart_total'>
            <p>Total Price: ₹{totalPrice}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;