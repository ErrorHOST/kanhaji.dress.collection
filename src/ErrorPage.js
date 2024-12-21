import React from "react";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="error-container">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
        <div className="button-group">
          <button className="error-button" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Go Back
          </button>
          <button className="error-button home" onClick={() => navigate('/')}>
            <FaHome /> Go to Home
          </button>
        </div>

        {/* Floating Circles */}
        <div className="floating-circles">
          <span className="circle small"></span>
          <span className="circle medium"></span>
          <span className="circle big"></span>
          <span className="circle small"></span>
          <span className="circle medium"></span>
          <span className="circle big"></span>
          <span className="circle small"></span>
          <span className="circle medium"></span>
        </div>
      </div>

    </Wrapper>
  );
};
const Wrapper = styled.div`
  .error-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to bottom, #ff7e5f, #feb47b);
    text-align: center;
    overflow: hidden;
    color: #fff;
  }

  .error-title {
    font-size: 10rem;
    font-weight: bold;
    -webkit-text-stroke: 2px #fff;
    color: rgba(255, 255, 255, 0.15);
    z-index: 2;
    position: relative;
    animation: floatTitle 4s infinite ease-in-out;
  }

  .error-message {
    font-size: 1.5rem;
    margin: 1rem 0 2rem;
    z-index: 2;
    position: relative;
  }

  .button-group {
    display: flex;
    gap: 1rem;
    z-index: 2;
    position: relative;
  }


  .error-button {
    background: linear-gradient(45deg, rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8));
    color: #ffffff;
    border: none;
    border-radius: 30px;
    padding: 0.8rem 2.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 5px 15px rgba(42, 82, 152, 0.5);
  }

  .error-button:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(42, 82, 152, 0.7);
  }

  /* Floating Circles */
  .floating-circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .circle {
    position: absolute;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    animation: float 10s infinite ease-in-out;
  }

  .circle.small {
    width: 50px;
    height: 50px;
    top: 20%;
    left: 15%;
    animation-duration: 8s;
  }

  .circle.medium {
    width: 100px;
    height: 100px;
    top: 40%;
    left: 50%;
    animation-duration: 12s;
  }

  .circle.big {
    width: 150px;
    height: 150px;
    top: 50%;
    right: 90%;
    animation-duration: 15s;
  }

  /* Additional circles */
  .circle.small:nth-child(4) {
    top: 10%;
    left: 80%;
    animation-duration: 7s;
  }

  .circle.medium:nth-child(5) {
    top: 70%;
    left: 30%;
    animation-duration: 10s;
  }

  .circle.big:nth-child(6) {
    top: 70%;
    left: 90%;
    animation-duration: 14s;
  }

  .circle.small:nth-child(7) {
    top: 90%;
    left: 1%;
    animation-duration: 6s;
  }

  .circle.medium:nth-child(8) {
    top: 90%;
    right: 1%;
    animation-duration: 8s;
  }
  @keyframes float {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(20px, -20px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes floatTitle {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .error-title {
      font-size: 6rem;
      -webkit-text-stroke: 1px #fff;
    }

    .error-message {
      font-size: 1.2rem;
      margin: 1rem 0;
    }

    .error-button {
      padding: 0.6rem 1.8rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .error-title {
      font-size: 4rem;
      -webkit-text-stroke: 1px #fff;
    }

    .error-message {
      font-size: 1rem;
      margin: 0.8rem 0;
    }

    .error-button {
      padding: 0.5rem 1.5rem;
      font-size: 0.9rem;
    }
  }
`;

export default ErrorPage;
