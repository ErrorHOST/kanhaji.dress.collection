import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductButton = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simulating a delay for loading (e.g., API call)
    setTimeout(() => {
      setLoading(false);
      navigate("/products");
    }, 1500); // Delay for demonstration
  };

  return (
    <Wrapper>
      <div className="tooltip">
        <button
          className={`view-all-button ${loading ? "loading" : ""}`}
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? (
            <span>Loading...</span>
          ) : (
            <span>
              View All Products <i className="arrow-icon">→</i>
            </span>
          )}
        </button>
        {/* <span className="tooltiptext">
          Click to explore all our products!
        </span> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 6rem 0;

  .view-all-button {
    position: relative;
    background: linear-gradient(45deg, #6d93e8, #d4a5f6);
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 15px 30px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .view-all-button.loading {
    background: #d3d3d3;
    cursor: not-allowed;
  }

  .view-all-button:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, #f39c12, #e74c3c);
  }

  .view-all-button:focus {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }

  .view-all-button span {
    position: relative;
    z-index: 2;
  }

  .view-all-button i {
    margin-left: 10px;
  }

  .view-all-button::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent);
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: scale(0);
  }

  .view-all-button:hover::before {
    opacity: 1;
    transform: scale(1);
  }

  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltiptext {
    visibility: hidden;
    width: 160px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -80px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 768px) {
    .view-all-button {
      font-size: 1.2rem;
      padding: 12px 24px;
    }
  }

  @media (max-width: 480px) {
    .view-all-button {
      font-size: 1rem;
      padding: 10px 20px;
    }
  }
`;

export default ProductButton;
