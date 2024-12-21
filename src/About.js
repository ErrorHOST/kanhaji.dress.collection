import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
    <div className="about-container">
      <div className="about-header">
        <h1>Welcome to Kanhaji Dress Collection</h1>
        <p>
          Your one-stop destination for premium Kanhaji Shringar items and
          accessories at wholesale prices. Enhance your Bhagvanji idol's beauty
          with our stunning handcrafted collection.
        </p>
      </div>

      <div className="about-cards">
        <div className="card">
          <h3>Kanhaji Clothes</h3>
          <p>Elegant and colorful outfits for your beloved deity.</p>
          <img
            src="https://via.placeholder.com/150"
            alt="Kanhaji Clothes"
            className="card-img"
          />
        </div>
        <div className="card">
          <h3>Kangan</h3>
          <p>Beautiful bangles crafted with care for Bhagvanji.</p>
          <img
            src="https://via.placeholder.com/150"
            alt="Kangan"
            className="card-img"
          />
        </div>
        <div className="card">
          <h3>Paghdi</h3>
          <p>Traditional and stylish headgear for Kanhaji idols.</p>
          <img
            src="https://via.placeholder.com/150"
            alt="Paghdi"
            className="card-img"
          />
        </div>
        <div className="card">
          <h3>Zula & Sinhasan</h3>
          <p>Elegant swings and thrones to elevate Kanhaji’s charm.</p>
          <img
            src="https://via.placeholder.com/150"
            alt="Zula & Sinhasan"
            className="card-img"
          />
        </div>
        <div className="card">
          <h3>Customized Poshak</h3>
          <p>Tailored outfits to add a unique touch to your devotion.</p>
          <img
            src="https://via.placeholder.com/150"
            alt="Customized Poshak"
            className="card-img"
          />
        </div>
      </div>

      <div className="about-contact">
        <h2>Contact Us</h2>
        <p>
          📍 83, Bhavy Galaxy, Near Gayatri Mandir Road, Deesa 385535 <br />
          📞 <a href="tel:9825252892">98252 52892</a> <br />
          📸 Follow us on Instagram:{" "}
          <a
            href="https://www.instagram.com/kanhaji_dress_collection_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @kanhaji_dress_collection_
          </a>
        </p>
      </div>
    </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .about-container {
  padding: 20px;
  font-family: Arial, sans-serif;
  background: #f9f9f9;
  color: #333;
}

.about-header {
  text-align: center;
  margin-bottom: 30px;
}

.about-header h1 {
  font-size: 2.5rem;
  color: #e53935;
  margin-bottom: 10px;
}

.about-header p {
  font-size: 1.2rem;
  color: #555;
}

.about-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.card-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 10px 0;
}

.card h3 {
  font-size: 1.5rem;
  color: #e53935;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  color: #666;
}

.about-contact {
  text-align: center;
  background: #e53935;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
}

.about-contact h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.about-contact p {
  font-size: 1.2rem;
  line-height: 1.5;
}

.about-contact a {
  color: #ffcc80;
  text-decoration: none;
  font-weight: bold;
}

.about-contact a:hover {
  text-decoration: underline;
}

`;
export default About;
