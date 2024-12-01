import React from "react";
import Header from "../components/Header";
import { products } from "../data/productsData";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import Slider from "react-slick";
import "./Home.css";

// Import slick-carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";

const Home = () => {
  const topProducts = products.slice(0, 5);

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slick-prev">←</button>,
    nextArrow: <button className="slick-next">→</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5, slidesToScroll: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
    ],
  };

  return (
    <>
      <Header />
      <Carousel />
      <p style={{fontSize:'18px',textAlign:'center',marginTop:'40px',fontStyle:'italic'}}>
        "Welcome to Krishna's Wardrobe – Where Style Meets Elegance!"
      </p>
      <p
        className="text-center fs-2 my-4"
        style={{ fontWeight: "500", color: "#FF7B00" }}
      >
        ❆ Top Products of the Month ❆
      </p>
      <div
        className="mb-3 product-grid"
        style={{
          maxWidth: "100%",
          boxSizing: "border-box",
          display: "grid",
          gap: "10px",
          margin: "8px",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          justifyContent: "center",
        }}
      >
        {topProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="section all-products">
        <h1>Discover All Products</h1>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="slider-card">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>

      <Footer />
    </>
  );
};

export default Home;
