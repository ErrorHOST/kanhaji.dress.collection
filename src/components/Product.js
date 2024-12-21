import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaExpandAlt } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { useCartContext } from '../context/cart_context';

const Product = ({ product }) => {
  const { image, name, price, oldPrice } = product;
  const { addToCart, likeProduct } = useCartContext();

  return (
    <Wrapper>
      <div className="product-item">
        {/* Product Image */}
        <div className="product-thumb">
          <NavLink to={`/product/${product.id}`} className="d-block">
            <img src={image} alt={name} loading="lazy" />
          </NavLink>
          <span className="flag-new">new</span>

          {/* Hover Action Buttons */}
          <div className="product-action">
            <button type="button" className="product-action-btn quick-view">
              <FaExpandAlt />
            </button>
            <button type="button" onClick={() => addToCart(product)}  className="product-action-btn add-to-cart">
              <BsCart3 />
            </button>
            <button type="button" onClick={() => likeProduct(product)} className="product-action-btn wishlist">
              <IoMdHeartEmpty />
            </button>
          </div>
        </div>

        {/* Product Information */}
        <div className="product-info">
          <h4 className="title">
            <NavLink to={`/product/${product.id}`}>{name}</NavLink>
          </h4>
          <div className="prices">
            <span className="price">₹{price}</span>
            {oldPrice && <span className="price-old">₹{oldPrice}</span>}
          </div>
        </div>

        {/* Bottom Action Buttons for Mobile */}
        <div className="product-action-bottom">
          <button type="button"  className="button">
            <FaExpandAlt />
          </button>
          <button type="button" onClick={() => likeProduct(product)} className="button">
            <IoMdHeartEmpty />
          </button>
          <button type="button" onClick={() => addToCart(product)} className="button action-cart">
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Product Card Container */
  .product-item {
    position: relative;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    font-family: Arial, sans-serif;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    }
  }

  /* Image Section */
  .product-thumb {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 120%; /* Aspect ratio for image */
    overflow: hidden;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .flag-new {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ff6565;
    color: white;
    border-radius: 50px;
    padding: 4px 12px;
    font-size: 12px;
  }

  /* Hover Action Buttons */
  .product-action {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .product-item:hover .product-action {
    opacity: 1;
    visibility: visible;
  }

  .product-action-btn {
    background: #fff;
    border: 2px solid #e63946;
    border-radius: 50%;
    color: #231942;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #ff6565;
      color: #fff;
    }
  }

  .add-to-cart {
    border: 2px solid #e63946;
    display: flex;
    border-radius: 50px;
    
    height: 40px;
    width: 40px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #e63946;
      color: #fff;
    }
  }

  /* Product Info */
  .product-info {
    padding: 15px;

    .title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 8px;

      a {
        text-decoration: none;
        color: #231942;
        transition: color 0.3s ease;

        &:hover {
          color: #ff6565;
        }
      }
    }

    .prices {
      display: flex;
      align-items: center;
      font-size: 16px;

      .price {
        color: #231942;
        font-weight: bold;
        margin-right: 10px;
      }

      .price-old {
        color: #bbb;
        text-decoration: line-through;
        font-size: 14px;
      }
    }
  }

  /* Bottom Action Buttons for Mobile */
  .product-action-bottom {
    display: none;
    padding: 10px;
    border-top: 1px solid #eee;
    background: #f9f9f9;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .button {
      cursor: pointer;
      background-color: #f7f7f7;
      border: 1px solid #eee;
      width: calc(50% - 2px);
      font-size: 15px;
      padding: 4px;
      height: 40px;
      transition: all 0.5s ease 0s;

      &:hover {
        background: #ff6565;
        color: #fff;
      }
    }

    .action-cart {
      font-size: 12px;
      display: block;
      width: 100%;
      font-weight: 500;
      padding: 6px 0 8px;
      margin-top: 4px;
    }
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .product-info {
      .title {
        font-size: 16px;
      }
      .prices .price {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 575px) {
    .product-action {
      display: none;
    }

    .product-action-bottom {
      display: flex;
    }

    img {
      object-fit: cover;
    }
  }
`;

export default Product;
