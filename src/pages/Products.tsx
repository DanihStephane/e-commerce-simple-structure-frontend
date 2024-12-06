import React from 'react';
import { useCart } from '../context/CartContext';

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
  },
  {
    id: 3,
    name: "Wireless Speaker",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80"
  }
];

export const Products = () => {
  const { dispatch } = useCart();

  const addToCart = (product: typeof SAMPLE_PRODUCTS[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...product, quantity: 1 },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};