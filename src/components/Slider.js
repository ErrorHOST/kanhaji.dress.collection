import React, { useRef } from "react";
import Product from "./Product";
import styled from "styled-components";

const Slider = ({ products }) => {
  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300, // Adjust scroll distance
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300, // Adjust scroll distance
      behavior: "smooth",
    });
  };

  return (
    <Wrapper>
      <div className="slider-container">
        <div className="background-card" />
        <div className="fade fade-left" />
        <button className="slider-btn left-btn" onClick={scrollLeft}>
          &#8249;
        </button>
        <div className="slider" ref={sliderRef}>
          {products.map((product) => (
            <div className="slider-item" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
        <button className="slider-btn right-btn" onClick={scrollRight}>
          &#8250;
        </button>
        <div className="fade fade-right" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .slider-container {
    position: relative;
    overflow: hidden;
    width: 95%;
    margin: 5% auto;
    border-radius: 15px;
  }

  .background-card {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: #f0f7fc; /* Light blue matching the theme */
    border-radius: 20px;
    z-index: 1;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .slider {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For IE and Edge */
    position: relative;
    z-index: 2;
  }

  .slider::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }

  .slider-item {
    flex: 0 0 auto;
    width: 220px; /* Adjust card width */
    margin: 10px;
    transition: transform 0.3s ease;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .slider-item:hover {
    transform: scale(1.05);
  }

  .slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
  }

  .left-btn {
    left: 10px;
  }

  .right-btn {
    right: 10px;
  }

  .slider-btn:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .fade {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 120px; /* Increased fade width */
    z-index: 5;
    pointer-events: none;
  }

  .fade-left {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(223, 233, 243, 0.5), rgba(223, 233, 243, 1));
  }

  .fade-right {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(223, 233, 243, 0.5), rgba(223, 233, 243, 1));
  }

  @media (max-width: 768px) {
    .slider-item {
      width: 180px;
    }

    .slider-btn {
      width: 30px;
      height: 30px;
    }

    .fade {
      width: 50px; /* Adjust fade width for smaller screens */
    }

    .background-card {
      border-radius: 15px;
    }
  }

  @media (max-width: 480px) {
    .slider-item {
      width: 150px;
    }

    .fade {
      width: 40px; /* Further adjust fade width for smallest screens */
    }

    .background-card {
      border-radius: 10px;
    }
  }
`;

export default Slider;