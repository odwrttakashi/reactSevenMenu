import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Order from './pages/order/Order'; // 新しいリストページをインポート

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} /> {/* リストページのルートを追加 */}
      </Routes>
    </Router>
  );
}

export default App;
