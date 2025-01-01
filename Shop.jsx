import React, { useState } from 'react';
import list from './list';
import Card from './Card';
import './Shop.css'; // Add a CSS file for Shop component styling

const Shop = ({ handleClick }) => {
  const [search, setSearch] = useState('');

  // Filtering items based on search input
  const filteredList = (list || []).filter((item) =>
    (item.name || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="shop-container">
      <h1 className="shop-title">Welcome to Our Shop</h1>
      <input
        type="text"
        placeholder="Search for products..."
        className="shop-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="shop-grid">
        {filteredList.map((item) => (
          <Card item={item} key={item.id} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Shop;