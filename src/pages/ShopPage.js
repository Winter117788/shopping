import React, { useEffect, useState } from 'react';  
import ProductCard from '../components/ProductCard';  
import './ShopPage.css'; 

function ShopPage({ addToCart, cartItems = [] }) {  // 确保 cartItems 默认是空数组

  const [products, setProducts] = useState([]);  // 用来存储商品数据

  useEffect(() => {
    // 通过 fetch 获取商品数据
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())  // 解析返回的 JSON 数据
      .then((data) => setProducts(data));  // 将商品数据存储到状态中
  }, []);  // 空依赖数组表示组件第一次渲染时会执行这个副作用

  // 计算购物车里商品的总数量
  const totalQuantity = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0;

  return (
    <div>
      <h1>Shop</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
