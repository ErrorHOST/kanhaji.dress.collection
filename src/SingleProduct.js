import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from './context/productcontext';
import styled from 'styled-components';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useProductContext();
  const [selectedSize, setSelectedSize] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  const product = products.find((item) => item.id === id);

console.log(product);


  if (!product) return <div>Product Not Found</div>;

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const renderRating = () => {
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="rating">
        {Array(fullStars)
          .fill(null)
          .map((_, index) => (
            <AiFillStar key={`full-${index}`} className="star" />
          ))}
        {hasHalfStar && <AiFillStar className="star half" />}
        {Array(emptyStars)
          .fill(null)
          .map((_, index) => (
            <AiOutlineStar key={`empty-${index}`} className="star" />
          ))}
      </div>
    );
  };

  return (
    <Wrapper>
      <div className="product-card">
        <div className="image-section">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="info-section">
          <h1 className="product-title">{product.name}</h1>
          <div className="price-rating">
            <p className="price">${product.price}</p>
            <div className="ratings">
              {renderRating()}
              <span className="reviews">({product.reviews} reviews)</span>
            </div>
          </div>
          <p className="description">{product.description}</p>
          <div className="size-selector">
            <p>Select Size:</p>
            <div className="sizes">
              {[0, 1, 2, 3, 4, 5, 6].map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? 'size selected' : 'size'}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="action-buttons">
            <button className="like-button" onClick={() => setIsLiked(!isLiked)}>
              {isLiked ? <IoMdHeart /> : <IoMdHeartEmpty />}
            </button>
            <button
              className="add-to-cart"
              disabled={!selectedSize}
              onClick={() => alert('Added to cart!')}
            >
              <BsCart3 /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .product-card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 20px auto;
    font-family: Arial, sans-serif;
  }

  .image-section img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .info-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .product-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }

  .price-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    font-size: 24px;
    color: #e63946;
    font-weight: bold;
  }

  .ratings {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .rating {
    display: flex;
  }

  .star {
    color: #ffb400;
    font-size: 20px;
  }

  .reviews {
    font-size: 14px;
    color: #888;
  }

  .description {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
  }

  .size-selector {
    margin-bottom: 20px;
  }

  .sizes {
    display: flex;
    gap: 10px;
  }

  .size {
    padding: 10px 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: white;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .size:hover {
    background: #f7f7f7;
  }

  .size.selected {
    background: #e63946;
    color: white;
    border-color: #e63946;
  }

  .action-buttons {
    display: flex;
    gap: 10px;
  }

  .like-button {
    background: none;
    border: none;
    font-size: 24px;
    color: #e63946;
    cursor: pointer;
  }

  .add-to-cart {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: #231942;
    color: white;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: background 0.3s ease;
  }

  .add-to-cart:disabled {
    background: #ddd;
    cursor: not-allowed;
  }

  .add-to-cart:hover:enabled {
    background: #150c28;
  }

  @media (max-width: 768px) {
    .product-card {
      padding: 15px;
    }

    .product-title {
      font-size: 24px;
    }

    .price {
      font-size: 20px;
    }

    .description {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    .product-card {
      padding: 10px;
    }

    .product-title {
      font-size: 20px;
    }

    .price {
      font-size: 18px;
    }

    .description {
      font-size: 12px;
    }
  }
`;

export default SingleProduct;
