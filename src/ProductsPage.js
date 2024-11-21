import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import { products } from "../data/productsData"; // Import your products array

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const toggleLikeProduct = (product) => {
    setLikedProducts((prevLiked) =>
      prevLiked.some((p) => p.id === product.id)
        ? prevLiked.filter((p) => p.id !== product.id) // Remove if already liked
        : [...prevLiked, product] // Add to liked
    );
  };

  return (
    <div>
      <h2>Products</h2>
      <div
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
            addToCart={addToCart}
            toggleLikeProduct={toggleLikeProduct}
            isLiked={likedProducts.some((p) => p.id === product.id)}
          />
        ))}
      </div>

      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>

      <h2>Liked Products</h2>
      <ul>
        {likedProducts.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
