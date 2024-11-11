import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 引入路由模块
import HomePage from './pages/HomePage'; // 引入主页组件
import ShopPage from './pages/ShopPage'; // 引入商店页面组件
import Navbar from './components/Navbar'; // 引入导航栏组件
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]); // 管理购物车中的商品

  // 添加商品到购物车
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]); // 将商品添加到购物车中
  };

  return (
    <Router> {/* 确保这里使用 Router 包裹整个应用 */}
      <div>
        {/* 导航栏，显示购物车商品数量 */}
        <Navbar cartCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* 商店页面 */}
          <Route path="/shop" element={<ShopPage addToCart={addToCart} />} />
          {/* 购物车页面 */}
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
