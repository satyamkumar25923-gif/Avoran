import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Dark overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-dark z-50 cursor-pointer"
          />

          {/* Cart Panel Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-light shadow-2xl z-50 flex flex-col h-full border-l border-white border-opacity-20"
          >
            {/* Header */}
            <div className="p-6 border-b border-dark border-opacity-10 flex justify-between items-center bg-white bg-opacity-40 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="text-primary" size={24} />
                <h3 className="text-xl font-heading font-bold text-dark tracking-wide">Your Cart</h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-dark hover:text-primary transition-colors p-1 hover:bg-dark hover:bg-opacity-5 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <ShoppingBag size={48} className="text-dark text-opacity-20 stroke-[1.5]" />
                  <p className="text-dark text-opacity-50 font-light">Your artisan collection is empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2.5 bg-primary text-white text-sm font-medium hover:bg-maroon transition-colors"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="flex space-x-4 bg-white bg-opacity-60 p-4 border border-white border-opacity-50 shadow-sm relative group"
                  >
                    {/* Item Image */}
                    <div className="w-20 h-24 bg-gray-50 flex-shrink-0 overflow-hidden shadow-inner">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Item Content */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="font-heading font-semibold text-dark text-sm leading-snug pr-6">
                          {item.name}
                        </h4>
                        <p className="text-primary font-medium text-xs mt-1">₹{item.price.toLocaleString('en-IN')}</p>
                      </div>

                      {/* Quantity Adjusters */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-dark border-opacity-10 bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-dark hover:bg-opacity-5 text-dark"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-xs font-semibold text-dark select-none">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-dark hover:bg-opacity-5 text-dark"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-dark text-opacity-40 hover:text-primary transition-colors p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer Summary / Checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-dark border-opacity-10 bg-white bg-opacity-80 backdrop-blur-md space-y-4">
                <div className="flex justify-between items-center text-dark font-medium">
                  <span className="font-light">Subtotal</span>
                  <span className="text-xl font-heading font-bold text-primary">
                    ₹{cartTotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-xs text-dark text-opacity-50 font-light">
                  Shipping and taxes calculated at checkout. Every craft supports local Indian artisans directly.
                </p>
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => alert("Checkout initiated! Complete this setup in backend phase.")}
                    className="w-full bg-primary text-white py-4 font-medium uppercase text-sm tracking-wider hover:bg-maroon transition-colors shadow-lg"
                  >
                    Proceed to Secure Checkout
                  </button>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full border border-dark text-dark py-3 font-medium uppercase text-xs tracking-wider hover:bg-dark hover:text-white transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
