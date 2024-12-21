import React from "react";
import Product from "./Product";
import styled from "styled-components";

const TopProducts = ({ products }) => {
  const getRandomProducts = (arr, num) => {
    return arr
      .sort(() => Math.random() - 0.5) // Shuffle array
      .slice(0, num); // Select first num elements
  };

  const randomProducts = getRandomProducts(products, 5); // Fetch 5 random products

  return (
    <Wrapper>
      <div className="top-products-container">
        <h2 className="section-title">Top Products</h2>
        <div className="products-grid">
          {randomProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .top-products-container {
    padding: 20px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .section-title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
    color: #ff6565;
  }

  .products-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center aligns all items */
    gap: 20px;
  }

  .products-grid > * {
    flex: 1 1 calc(20% - 20px); /* 5 items per row */
    min-width: 200px; /* Minimum size to prevent shrinking */
    max-width: 240px; /* Ensure consistent sizing */
    box-sizing: border-box;
  }

  .product-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1024px) {
    .products-grid > * {
      flex: 1 1 calc(33.33% - 20px); /* 3 items per row */
    }

    .section-title {
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    .products-grid {
      gap: 15px;
    }

    .products-grid > * {
      flex: 1 1 calc(50% - 15px); /* 2 items per row */
    }

    .section-title {
      font-size: 20px;
    }
  }

    @media (max-width: 480px) {
    .products-grid {
      gap: 15px;
    }

    .products-grid > * {
      flex: 1 1 calc(50% - 15px); /* 2 items per row */
    }

    .section-title {
      font-size: 20px;
    }
  }

`;

export default TopProducts;