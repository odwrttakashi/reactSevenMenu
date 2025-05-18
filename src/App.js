import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Order from './pages/order/Order';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
