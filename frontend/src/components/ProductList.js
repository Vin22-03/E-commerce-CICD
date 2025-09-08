import React from 'react';

const products = [
  {
    id: 1,
    name: 'MacBook Pro',
    price: 199900, // ₹1,99,900
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1697311085375',
  },
  {
    id: 2,
    name: 'iPhone 16 Pro',
    price: 139900, // ₹1,39,900
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium?wid=452&hei=420&fmt=jpeg&qlt=95',
  },
  {
    id: 3,
    name: 'AirPods Max',
    price: 59900, // ₹59,900
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1604022365000',
  },
];

function ProductList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
          >
           <div className="h-48 flex items-center justify-center mb-4">
              <img
                 src={product.image}
                 alt={product.name}
                 className="max-h-full object-contain"
                 />
               </div>
            <h3 className="text-lg font-semibold text-center">{product.name}</h3>
            <p className="text-center text-gray-700 mb-4">₹{product.price.toLocaleString()}</p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
