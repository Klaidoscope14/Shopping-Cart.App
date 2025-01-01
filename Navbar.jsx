import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const NavBar = ({ size, setshow }) => {
  return (
    <nav className='navbar'>
      <div className='nav_box'>
        <span className='logo'>DxO Shop</span>
        <div className='search_bar'>
          <input type='text' placeholder='Search products...' />
          <button><i className='fas fa-search'></i></button>
        </div>
        <div className='cart_icon' onClick={() => setshow(false)}>
          <span>
            <i className='fas fa-cart-plus'></i>
          </span>
          <span className='cart_count'>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;