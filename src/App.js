import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, data } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import LikedProducts from "./LikedProducts";
import Feedback from "./Feedback";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import Login from "./Login";
import ProductList from "./components/ProductList";
import ProductDetail from "./SingleProduct";
import { CartProvider, useCartContext } from './context/cart_context';
import { products } from "./data/productsData";
import SingleProduct from "./SingleProduct";

function App() {
    const { loadProducts } = useCartContext();
  
    useEffect(() => {
      loadProducts(products); // Load initial data
    }, []);
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/liked" element={<LikedProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
