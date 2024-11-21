import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "./data"; // Import your products array

const Liked = () => {
  const [likedProducts, setLikedProducts] = useState([]);


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
            toggleLikeProduct={toggleLikeProduct}
            isLiked={likedProducts.some((p) => p.id === product.id)}
          />
        ))}
      </div>

      <h2>Liked Products</h2>
      <ul>
        {likedProducts.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      </div>
  );
};

export default Liked;