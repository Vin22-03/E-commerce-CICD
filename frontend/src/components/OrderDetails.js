import React from 'react';

const OrderDetails = () => {
  const orders = [
    {
      id: 'ORD123456',
      product: 'iPhone 16 Pro',
      status: 'Shipped',
      eta: 'Arriving by Sep 10, 2025',
      address: '123 Old Street, Hubballi, Karnataka, India',
    },
    {
      id: 'ORD123457',
      product: 'MacBook Pro',
      status: 'Delivered',
      eta: 'Delivered on Sep 5, 2025',
      address: '123 Old Street, Hubballi, Karnataka, India',
    },
  ];

  const statusColors = {
    Delivered: 'text-green-600',
    Shipped: 'text-blue-600',
    Arriving: 'text-yellow-600',
    Cancelled: 'text-red-600',
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">📦 Order Details</h2>
      <div className="space-y-6 max-w-2xl mx-auto">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-400"
          >
            <p className="text-sm text-gray-500">Order ID: {order.id}</p>
            <h3 className="text-xl font-semibold">{order.product}</h3>
            <p className={`${statusColors[order.status]} font-bold`}>
              Status: {order.status}
            </p>
            <p className="text-gray-600">{order.eta}</p>
            <p className="text-sm text-gray-400 mt-2">📍 {order.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
