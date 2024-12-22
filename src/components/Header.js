import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsSearch, BsCart3, BsPersonCircle } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";
import { IoMdArrowDropright } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { IoHome } from "react-icons/io5";

const Header = () => {
  // State to manage mobile menu visibility
  const [menuActive, setMenuActive] = useState(false); // Manage mobile menu visibility
  const [isVisible, setIsVisible] = useState(true); // Manage header visibility
  const [lastScrollPos, setLastScrollPos] = useState(0); // Track last scroll position
  const [isSearchActive, setIsSearchActive] = useState(false); // State for search box visibility
  const searchInputRef = useRef(null);

  const navigate = useNavigate();

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const openSearch = () => {
    setIsSearchActive(true);
    setTimeout(() => {
      searchInputRef.current?.focus(); // Autofocus the search input
    }, 0);
  };

  const closeSearch = () => {
    setIsSearchActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (!menuActive) {
        // Only manage header visibility if the menu is not active
        if (currentScrollPos > lastScrollPos && currentScrollPos > 100) {
          // Scrolling down and past 100px
          setIsVisible(false);
        } else {
          // Scrolling up or near top
          setIsVisible(true);
        }
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos, menuActive]);

  return (
    <>
      <MainHeader className={`header-area ${isVisible ? "visible" : "hidden"}`}>
        <div className="containerH">
          <div className="header-row">
            {/* <!-- Logo --> */}
            <div className="header-logo">
              <NavLink to="/" onClick={closeMenu}>
                <img src="/KanhajiLogo.svg" alt="This is logo" />
              </NavLink>
            </div>

            {/* <!-- Navigation --> */}
            <nav
              className={`header-navigation ${menuActive ? "active" : ""}`}
              id="navMenu"
            >
              <ul className="main-nav">
                <li className="has-submenu active">
                  <NavLink to="/" onClick={closeMenu}>
                    <IoMdArrowDropright className="nav-active" />
                    <IoHome className="hide-icon" /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products" onClick={closeMenu}>
                    <IoMdArrowDropright className="nav-active" />
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/liked" onClick={closeMenu}>
                    <IoMdArrowDropright className="nav-active" />
                    Liked Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={closeMenu}>
                    <IoMdArrowDropright className="nav-active" />
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/feedback" onClick={closeMenu}>
                    <IoMdArrowDropright className="nav-active" />
                    Feedback
                  </NavLink>
                </li>
              </ul>
              <NavLink
                to="/login"
                className="login-menu"
                onClick={closeMenu}
                hidden
              >
                <AiOutlineLogin /> Login
              </NavLink>
              {/* <NavLink
                // to="/login"
                className="login-menu"
                // onClick={closeMenu}
                hidden
              >
                <AiOutlineLogout /> Logout
              </NavLink> */}
            </nav>

            {/* <!-- Action Buttons --> */}
            <div className="header-action">
              <button
                className="action-btn search-button"
                aria-label="Open Search"
                onClick={() => {
                  openSearch();
                  closeMenu();
                }}
              >
                <BsSearch className="search" />
              </button>

              <button
                className="action-btn cart-btn"
                onClick={() => {
                  navigate("/cart");
                  closeMenu();
                }}
              >
                <BsCart3 className="cart" />
              </button>
              <NavLink
                className="action-btn login-btn"
                to="/login"
                onClick={closeMenu}
              >
                <BsPersonCircle className="login" />
              </NavLink>
              <button
                className="menu-toggle-btn"
                id="menuToggle"
                onClick={toggleMenu}
              >
                <LuMenu className="menu" />
              </button>
            </div>
          </div>
        </div>
      </MainHeader>
      {/* Search Box and Overlay */}
      {isSearchActive && (
        <SearchOverlay onClick={closeSearch}>
          <SearchBox onClick={(e) => e.stopPropagation()}>
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                ref={searchInputRef} // Attach ref here
                placeholder="Search..."
                className="search-input"
              />
              <button type="submit" className="search-btn">
                <BsSearch style={{ color: "white", fontSize: "20px" }} />
              </button>
            </form>
          </SearchBox>
        </SearchOverlay>
      )}
    </>
  );
};

const MainHeader = styled.header`
  margin: 0;
  font-family: Arial, sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: rgba(245, 255, 245, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-out;
  -webkit-transition: all 0.4s ease-out;

  &.hidden {
    transform: translateY(-100%);
    opacity: 0;
  }

  &.visible {
    transform: translateY(0);
    opacity: 1;
  }

  .search {
    font-size: 25px;
    color: #262626;
  }
  .cart {
    font-size: 25px;
    color: #262626;
  }
  .login {
    font-size: 25px;
    color: #262626;
  }
  .menu {
    font-size: 30px;
    color: #262626;
  }
  .hide-icon,
  .nav-active {
    display: none;
  }

  .containerH {
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }

  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .header-logo img {
    display: block;
    width: 70px;
  }

  .main-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
  }

  .main-nav li {
    position: relative;
  }

  .main-nav a {
    font-family: Inter, sans-serif;
    text-decoration: none;
    color: #262626;
    font-size: 16px;
    font-weight: 500;
    padding: 8px 12px;
    transition: all 0.3s ease;
  }

  .main-nav a:hover {
    color: #ff6565;
  }

  /* Style for Active Tab */
  .main-nav a.active {
    color: #ff6565;
    font-weight: bold;
    // border-bottom: 2px solid #007bff; /* Optional underline effect */
  }

  /* Header Actions */
  .header-action {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .action-btn {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .action-btn:hover {
    transform: scale(1.1);
  }

  .menu-toggle-btn {
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
  }

  /* General Mobile Styles */
  @media (max-width: 768px) {
    .header-row {
      flex-wrap: wrap;
    }
    .main-nav a.active {
      .nav-active {
        color: #ff6565;
        font-size: 30px;
        display: inline-block;
        position: fixed;
        left: 0;
      }
      text-decoration: underline;
    }

    .hide-icon {
      display: inline-block;
    }
    .login-menu {
      display: block;
      margin: 50px auto;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      text-decoration: none;
      padding: 10px;
      color: white;
      font-size: 25px;
      border-radius: 5px;
      border: 2px solid white;
      transition: all 0.3s ease;

    }
    .login-menu:hover {
      color: #ff6565;
      border-color: #ff6565;
    }
    .login-menu.active{
    color: #ff6565;
      border-color: #ff6565;
    }
    .header-navigation {
      display: none;
      flex-direction: column;
      background-color: #1f1f1f;
      position: fixed;
      top: 44px;
      right: 0;
      width: 100%;
      height: 100vh;
      z-index: 10;
      animation: menuT 0.4s ease-in-out;
    }
    @keyframes menuT {
      from {
        transform: translateX(180%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .header-navigation.active {
      display: flex;
    }

    .main-nav {
      margin-top: 30px;
      flex-direction: column;
      gap: 40px;
    }

    .main-nav li {
      margin-left: 25px;
    }

    .main-nav a {
      color: white;
      font-size: 22px;
      padding: 15px;
    }

    .submenu-nav {
      position: static;
      display: none;
    }

    .has-submenu:hover .submenu-nav {
      display: block;
    }

    .menu-toggle-btn {
      display: block;
    }

    .header-logo img {
      display: block;
      width: 45px;
    }
  }

  /* Desktop Styles */
  @media (min-width: 769px) {
    .header-navigation {
      display: flex !important;
    }

    .menu-toggle-btn {
      display: none;
    }
  }
`;

const SearchOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  cursor: url("cross.png"), auto;
  display:flex;
  justify-content: center;

`;

const SearchBox = styled.div`
  background: #fff3da;
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: auto;
  animation: fadeIn 0.4s ease-in-out;

  @keyframes fadeIn {
    from {
      transform: translateY(-150%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .search-form {
  width:100%;
    display: flex;
    align-items: center;
        justify-content: center;
    gap: 0; /* Add spacing between input and button */
  }

  .search-input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border: 2px solid #ff6565;
    color: #ff3232;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: none;
    outline: none; /* Removes default outline */
    transition: border-color 0.3s ease; /* Smooth transition */
  }

  .search-input:focus {
    border-color: #ff6565; /* Change to your desired color */
  }
  .search-input::placeholder {
    color: #ff6565; /* Change to your desired color */
  }
  .search-btn {
    background: #ff6565; /* Bootstrap primary color */
    color: #fff;
    border: 1.5px solid #ff6565;
    padding: 10px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .search-btn:hover {
    background: #ff3232; /* Darker shade on hover */
  }
`;

export default Header;
