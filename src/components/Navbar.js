import React from 'react';
import { Link } from 'react-router-dom';  // 使用 Link 进行导航
import './Navbar.css'; // 引入 CSS 文件

function Navbar({ cartCount }) {
  return (
    <nav>
      {/* 首页链接 */}
      <Link to="/">Home</Link>
      {/* 商店链接 */}
      <Link to="/shop">Shop</Link>
      {/* 购物车链接，显示购物车商品总数量 */}
      <Link to="/cart">
        Cart ({cartCount})  {/* cartCount 是购物车中的商品总数量 */}
      </Link>
    </nav>
  );
}

export default Navbar;
