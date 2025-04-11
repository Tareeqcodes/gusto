
'use client';
import { useCart } from "./context/CartContext";

export default function Cart() {
  const { 
    cart, 
    removeFromCart, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Cart Button (Shows item count) */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 bg-amber-600 text-white p-3 rounded-full shadow-lg z-50 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>

      {/* Popup Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Your Order</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-4 space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">₦{item.price.toLocaleString()}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            </div>

            {/* Checkout Section */}
            {cart.length > 0 && (
              <div className="p-4 border-t sticky bottom-0 bg-white">
                <div className="flex justify-between mb-4">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold">₦{total.toLocaleString()}</span>
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium">
                  Proceed to Checkout
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  You'll confirm payment method later
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}