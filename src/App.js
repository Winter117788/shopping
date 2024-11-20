import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 引入路由模块
import HomePage from './pages/HomePage'; // 引入主页组件
import ShopPage from './pages/ShopPage'; // 引入商店页面组件
import Navbar from './components/Navbar'; // 引入导航栏组件
import Cart from './components/Cart'; // 引入购物车组件
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]); // 管理购物车中的商品

  // 添加商品到购物车
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevItems, product];
    });
  };

  // 更新商品数量
  const updateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + change }
          : item
      ).filter((item) => item.quantity > 0) // 过滤掉数量为 0 的商品
    );
  };

  // 删除商品
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // 计算购物车中所有商品的总数量
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div>
        {/* 导航栏，显示购物车商品总数量 */}
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* 商店页面 */}
          <Route path="/shop" element={<ShopPage addToCart={addToCart} />} />
          {/* 购物车页面 */}
          <Route path="/cart" element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
