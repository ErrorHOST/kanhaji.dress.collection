import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/productsData"; // Replace with your data source
import "./ProductDetails.css";
import Header from "../components/Header";

const ProductDetails = ({ addToCart, toggleLikeProduct, likedProducts = [] }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const isLiked = likedProducts.some((p) => p.id === product?.id);

  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <Header />
      <div className="product-details-page">
        <div className="product-details-container">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
          <div className="product-info-section">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>

            <div className="product-size-selector">
              <h3>Select Size:</h3>
              <div className="size-options">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? "selected" : ""}`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-actions">
              <button
                className={`add-to-cart ${!selectedSize ? "disabled" : ""}`}
                onClick={() => selectedSize && addToCart({ ...product, size: selectedSize })}
                disabled={!selectedSize}
              >
                {selectedSize ? "Add to Cart" : "Select Size First"}
              </button>
              <button
                className="like-product"
                onClick={() => toggleLikeProduct(product)}
              >
                {isLiked ? "♥ Liked" : "♡ Like"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
