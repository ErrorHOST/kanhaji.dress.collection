import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import './header.css';

function Header() {
  return (
    <Navbar
    style={{
      backgroundColor: "rgba(210, 207, 199, 0.48)",
      backdropFilter: "blur(2.8px)",
      position: "sticky",
      top: "0",
      zIndex: "10",
      display: "flex",
      marginRight:'10px',
      justifyContent: "end",
    }}
    expand="lg"
  >
    <NavbarBrand
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "20px",
        position: "absolute",
        top: '3px',
        left: "10px",
      }}
    >
      <img src="Kanhajilogo.svg" width={50} alt="Logo" />
      {/* <span style={{fontSize:"22px", color:"#B77748", marginRight:"70px"}}> SeedConnect</span> */}
    </NavbarBrand>
  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
    <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: "center" }}>
      <Nav className="nav-options" style={{ display: "flex", gap: "20px" }}>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>
        <NavLink to="/about-us" className="nav-link">
          About Us
        </NavLink>
        <NavLink to="/quality" className="nav-link">
          Liked Products
        </NavLink>
        <NavLink to="/feedback" className="nav-link">
          Feedback
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  
  );
}

export default Header;
