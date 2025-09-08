import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import OrderDetails from './components/OrderDetails'; // ✅ You created this
import quickLootLogo from './assets/quicklooot.png';

function Home() {
  return (
    <>
      {/* 👇 Centered logo and tagline */}
      <div className="flex justify-center mt-2 mb-0">
        <img
          src={quickLootLogo}
          alt="QuickLoot Logo"
          className="w-64 h-64 object-contain"
        />
      </div>

      {/* 👇 Product list */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-8">
        <ProductList />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="p-6 bg-gray-50 min-h-screen font-sans">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<OrderDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
