import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = "http://localhost:8080";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/products`)
      .then(res => setProducts(res.data.products))
      .catch(err => console.error("Product list error:", err));
  }, []);

  const placeOrder = (id) => {
    axios.post(`${API_BASE}/order`, { product_id: id, quantity: 1 })
      .then(res => alert(JSON.stringify(res.data)))
      .catch(err => alert("Error placing order"));
  };

  return (
    <div>
      <h2>🛍️ Products</h2>
      {products.length === 0 ? (
        <p>No products loaded.</p>
      ) : (
        products.map(product => (
          <div key={product.id} style={{ marginBottom: '10px' }}>
            <strong>{product.name}</strong> — ₹{product.price}
            <button onClick={() => placeOrder(product.id)} style={{ marginLeft: '10px' }}>
              Order
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
