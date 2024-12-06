import React from 'react';
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Cart = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      {state.items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          {state.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center py-4 border-b last:border-b-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-right">
            <p className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </p>
            <button className="mt-4 bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};