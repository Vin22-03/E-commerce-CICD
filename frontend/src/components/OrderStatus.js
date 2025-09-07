import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = "http://localhost:8080";

function OrderStatus() {
  const [status, setStatus] = useState("...");
  const [version, setVersion] = useState("...");

  useEffect(() => {
    axios.get(`${API_BASE}/status`)
      .then(res => setStatus(res.data.order_status))
      .catch(err => {
        console.error("Status error:", err);
        setStatus("Error fetching status");
      });

    axios.get(`${API_BASE}/version`)
      .then(res => setVersion(res.data.version))
      .catch(err => {
        console.error("Version error:", err);
        setVersion("Error fetching version");
      });
  }, []);

  return (
    <div>
      <h2>📦 Order Status</h2>
      <p>Status: <strong>{status}</strong></p>
      <p>App Version: <strong>{version}</strong></p>
    </div>
  );
}

export default OrderStatus;
