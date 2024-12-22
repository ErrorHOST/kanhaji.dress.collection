import React from "react";
import Carousel from "./components/Carousel";
import ScrollToTop from "./components/ScrollToTop";
import Category from "./components/Category";
import styled from "styled-components";
import TopProducts from "./components/TopProducts";
import Slider from "./components/Slider";
import ViewAllProductsButton from "./components/ProductButton";
import { products } from "./data/productsData";

// Styled Components for the Modern Text
const Heading = styled.h2`
  margin: 4rem auto 6rem auto; /* Generous top and bottom margins for flexibility */
  font-size: 2.5rem; /* Scalable for larger screens */
  font-weight: 500;
  text-align: center;
  background: linear-gradient(90deg, #ff6b6b, #ff9a9a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: #ff6565;
  color: transparent;
  font-family: "Poppins", sans-serif;
  letter-spacing: 1.2px;
  max-width: 90%; /* Restrict width for readability on large screens */

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust font size for tablets */
    margin: 3rem auto; /* Reduce margin slightly for medium screens */
  }

  @media (max-width: 480px) {
    font-size: 1.6rem; /* Smaller font for mobile */
    margin: 2.5rem auto; /* Balanced spacing for mobile screens */
    line-height: 1.5; /* Improve readability on small devices */
  }
`;

const Home = () => {

  // const products = [
  //   // Example product data
  //   { id: 1, title: "Product 1", price: 29.99, image: "/images/product1.jpg" },
  //   { id: 2, title: "Product 2", price: 49.99, image: "/images/product2.jpg" },
  //   { id: 3, title: "Product 3", price: 19.99, image: "/images/product3.jpg" },
  //   { id: 3, title: "Product 3", price: 19.99, image: "/images/product3.jpg" },
  //   { id: 3, title: "Product 3", price: 19.99, image: "/images/product3.jpg" },
  //   { id: 3, title: "Product 3", price: 19.99, image: "/images/product3.jpg" },
  //   // Add more products as needed
  // ];

  return (
    <>
      <Carousel />
      <Heading>Welcome to Krishna's Wardrobe – Where Style Meets Elegance!</Heading>
      <Category />
      <div>
      <TopProducts products={products} />
      </div>
      <Slider products={products}/>
      <ViewAllProductsButton/>
      <ScrollToTop />
    </>
  );
};

export default Home;
