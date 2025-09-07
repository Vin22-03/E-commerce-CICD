import React from 'react';
import ProductList from './components/ProductList';
import OrderStatus from './components/OrderStatus';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🛒 VinCloudOps E-Commerce</h1>
      <ProductList />
      <hr />
      <OrderStatus />
    </div>
  );
}

export default App;
