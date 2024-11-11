import React, { useEffect, useState } from 'react';  // 引入 useState 和 useEffect Hook
import ProductCard from '../components/ProductCard';  // 引入商品卡片组件

function ShopPage({ addToCart }) {
  const [products, setProducts] = useState([]);  // 用来存储商品数据

  useEffect(() => {
    // 通过 fetch 获取商品数据
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())  // 解析返回的 JSON 数据
      .then((data) => setProducts(data));  // 将商品数据存储到状态中
  }, []);  // 空依赖数组表示组件第一次渲染时会执行这个副作用

  return (
    <div>
      <h1>Shop</h1>
      <div className="product-list">
        {/* 遍历商品数组并渲染商品卡片 */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
