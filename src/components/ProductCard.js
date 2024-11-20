import React, { useState } from 'react';
import './ProductCard.css'; // 引入对应的CSS文件

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1); // 初始化商品数量为 1

  // 处理数量增减
  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(prevQuantity + amount, 1)); // 确保数量不小于1
  };

  return (
    <div className="product-card">
      <h3 className="product-title">{product.title}</h3>
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="product-price">${product.price.toFixed(2)}</p>
      <div className="quantity-container">
        <button className="quantity-btn" onClick={() => handleQuantityChange(-1)}>-</button>
        <span className="quantity">{quantity}</span>
        <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      <button 
        className="add-to-cart-btn" 
        onClick={() => addToCart({ ...product, quantity })}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
