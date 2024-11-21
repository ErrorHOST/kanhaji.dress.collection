import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/productsData";
import Header from "../components/Header";

const Cart = () => {
  const [cart, setCart] = useState([]); // State to manage cart items

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to cart
  };

  return (
    <div>
      <Header/>
      {/* <h2>Products</h2> */}
      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart} // Pass the function as a prop
          />
        ))}
      </div> */}

      <h2>Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
