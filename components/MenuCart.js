'use client';
import { useState } from 'react';
import Menu from './Menu';
import Cart from './Cart';

export default function MenuCart() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setIsCartOpen(true);
  };

  return (
    <>
      <Menu addToCart={addToCart} openCart={() => setIsCartOpen(true)} />
      <Cart cart={cart} setCart={setCart} isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </>
  );
}
