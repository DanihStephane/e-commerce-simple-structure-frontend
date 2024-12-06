import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { state } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Store className="h-6 w-6 text-indigo-600" />
              <span className="font-bold text-xl">E-Shop</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/products"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Products
            </Link>
            <Link
              to="/account"
              className="text-gray-700 hover:text-indigo-600 p-2 rounded-full"
            >
              <User className="h-6 w-6" />
            </Link>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-indigo-600 p-2 rounded-full relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};