import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart, toggleLikeProduct, isLiked }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <Link to={`/products/${product.id}`}>View Details</Link>
      </div>
      <div className="product-card-actions">
      
        <button className="add-to-cart" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <button
          className="like-product"
          onClick={() => toggleLikeProduct(product)}
        >
          {isLiked ? "♥ Liked" : "♡ Like"}
        </button>
      </div>
    </div>
  );
};
  
export default ProductCard;
