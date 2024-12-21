import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FooterContainer = styled.footer`
  background: #466474;
  color: #ddd;
  padding: 50px 20px 18px 20px;
  font-family: "Poppins", sans-serif;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Column = styled.div`
  h4 {
    font-size: 22px;
    color: #ff6f61;
    margin-bottom: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    font-size: 15px;
    color: #bbb;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 10px 0;

      a {
        color: #bbb;
        font-size: 15px;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #ff6f61;
        }
      }
    }
  }
  .contact{
   color: #bbb;
        font-size: 15px;
        text-decoration: none;
  }
  
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: #ff6f61;
    color: #fff;
    border-radius: 50%;
    font-size: 20px;
    transition: transform 0.3s ease, background 0.3s ease;

    &:hover {
      transform: scale(1.1);
      background: #ff8d77;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterBottom = styled.div`
  margin-top: 15px;
  text-align: center;
  color: #517889;

  p {
    font-size: 14px;
    margin: 0;
    color: #36454F;
  }

  a {
    color: #ff6f61;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        {/* About Section */}
        <Column>
          <h4>About Kanha Ji Dress Collection</h4>
          <p>
            Discover divine handmade dresses crafted with precision and love for
            Kanha Ji. Bringing spiritual beauty to your worship.
          </p>
        </Column>

        {/* Quick Links */}
        <Column>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/liked">Liked Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/feedback">Feedback</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Your Cart</NavLink>
            </li>
          </ul>
        </Column>

        {/* Contact Information */}
        <Column>
          <h4>Contact Us</h4>
          <ul>
            <li className="contact">Email: info@kanhajidress.com</li>
            <li className="contact">Phone: +91 9876543210</li>
            <li className="contact">
              Address: 83, Bhavy Galaxy, Near Gayatri Mandir Road, Deesa 385535
            </li>
          </ul>
        </Column>

        {/* Social Media */}
        <Column>
          <h4>Follow Us</h4>
          <SocialIcons>
            <NavLink to="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/kanhaji_dress_collection_/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </NavLink>
            {/* <NavLink to="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </NavLink>
            <NavLink to="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </NavLink> */}
          </SocialIcons>
        </Column>
      </FooterGrid>
      {/* Footer Bottom */}
      <hr
        style={{ width:'85%', margin:'5px auto', borderTop: "0.5px", borderColor:'#517889' }}
      ></hr>
      <FooterBottom>

        <p>
          &copy; {new Date().getFullYear()} Kanha Ji Dress Collection. All rights
          reserved. Designed with ❤️ by{" Krishna Premi's"}
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
