import React from 'react';

function Cart({ cartItems }) {
  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {/* 遍历购物车中的商品，并显示每个商品的名称和数量 */}
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} x {item.quantity}  {/* 显示商品名和购买数量 */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
