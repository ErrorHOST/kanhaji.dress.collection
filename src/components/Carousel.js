import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { src: "carousel/carousel-1.jpeg", which: "First" },
        { src: "carousel/carousel-2.jpeg", which: "Second" },
        { src: "carousel/carousel-3.jpeg", which: "Third" },
        // { src: "carousel/carousel-4.jpeg", which: "Fourth" },
        // { src: "carousel/carousel-5.jpeg", which: "Fifth" },
    ];
    // Auto slide effect
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Change the slide every 3 seconds

        // Cleanup interval when component unmounts
        return () => clearInterval(intervalId);
    }, [slides.length]);

    const showSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <Wrapper>
            <div className="carousel">
                <div className="carousel-wrapper">
                    {slides.map((value, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === currentIndex ? "active" : ""
                                }`}
                        >
                            <img src={value.src} alt={`Slide ${index + 1}`} loading="lazy"/>
                            <div className="carousel-caption">
                                <h6>{`${value.which}`} slide label</h6>
                                <p>
                                    Some representative placeholder content for the{" "}
                                    {`${value.which}`} slide.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="carousel-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={index === currentIndex ? "active" : ""}
                            onClick={() => showSlide(index)}
                        ></button>
                    ))}
                </div>

                <div className="carousel-controls">
                    <button id="prev" onClick={goToPrevSlide}>
                        <svg viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 1 1 5l4 4"
                                stroke="#000"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </button>
                    <button id="next" onClick={goToNextSlide}>
                        <svg viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 1l4 4-4 4"
                                stroke="#000"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.section`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  .carousel {
    position: relative;
    width: 90%;
    margin: auto;
    margin-top: 8%;
    border-radius: 15px;
    overflow: hidden;
    // height: 200px;
  }

  .carousel-wrapper {
    display: flex;
    transition: transform 0.7s ease-in-out;
    will-change: transform;
  }

  .carousel-item {
    flex: 0 0 100%;
    display: none;
    position: relative;
  }

  .carousel-item img {
    width: 100%;
    height: auto;
    display: block;
  }

  .carousel-item.active {
    display: block;
  }

  .carousel-indicators {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
  }

  .carousel-indicators button {
    width: 32px;
    height: 3.5px;
    background-color: #ddd;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .carousel-indicators button.active {
    background-color: #333;
  }

  .carousel-controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }

  .carousel-controls button {
    background: rgba(255, 255, 255, 0.5);
    border: none;
    margin: 0 10px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .carousel-controls button:hover {
    background: rgba(255, 255, 255, 0.8);
  }

  .carousel-controls svg {
    width: 16px;
    height: 16px;
  }

  .carousel-caption {
    width: 70%;
    font-family: Roboto, sans-serif;
    position: absolute;
    bottom: 20px; /* Distance from the bottom of the slide */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Center correction */
    text-align: center; /* Center text */
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    color: #fff; /* White text color */
    padding: 10px 20px; /* Add padding for spacing */
    border-radius: 10px; /* Rounded corners */
  }

  .carousel-caption h6 {
    font-size: 20px; /* Adjust heading size */
    font-weight: 500;
    margin: 0 0 5px; /* Add spacing below the heading */
  }

  .carousel-caption p {
    color: white;
    font-size: 16px; /* Adjust paragraph size */
    margin-bottom: 5px; /* Remove extra margin */
  }

  @media (min-width: 768px) {
    .carousel-item img {
      height: 300px;
      object-fit: cover;
    }
  }

  @media (min-width: 1024px) {
    .carousel-item img {
      height: 500px;
    }
  }

  /* For smaller devices (e.g., tablets) */
  @media (max-width: 767px) {
    .carousel {
      width: 90%;
      margin: auto;
      margin-top: 17%;

    }
    .carousel-caption {
      display: none;
    }
  }
`;
export default Carousel;
