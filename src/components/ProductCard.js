import React, { useState } from 'react';

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);  // 管理商品的购买数量

  const handleAddToCart = () => {
    // 点击 "Add to Cart" 时，将商品信息和数量传递到购物车
    addToCart({ ...product, quantity });
  };

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <p>{product.price}</p>
      {/* 输入框允许用户手动输入购买数量 */}
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}  // 更新数量
        min="1"  // 最小值为 1
      />
      {/* 添加到购物车按钮 */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
