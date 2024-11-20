import React from 'react';
import './Cart.css'; // 引入 CSS 文件

function Cart({ cartItems, updateQuantity, removeItem }) {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => {
            const totalPrice = (item.price * item.quantity).toFixed(2); // 计算每个商品的总价格
            return (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-info">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-details">
                    -- ${item.price.toFixed(2)} &nbsp;&nbsp; x{item.quantity} = ${totalPrice}
                  </p>
                  <div className="cart-item-actions">
                    <button 
                      className="cart-item-btn" 
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <button 
                      className="cart-item-btn" 
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                    <button 
                      className="cart-item-btn clear-btn" 
                      onClick={() => removeItem(item.id)}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Cart;
