import React from 'react';
import { useCartContext } from './context/cart_context';

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cart;