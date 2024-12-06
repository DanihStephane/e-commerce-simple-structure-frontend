import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Account } from './pages/Account';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;