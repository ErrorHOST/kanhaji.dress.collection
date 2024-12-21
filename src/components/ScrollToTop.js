import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoChevronUpOutline } from "react-icons/io5";

const ScrollButton = styled.div`
  position: fixed;
  bottom: ${(props) => (props.visible ? "20px" : "-60px")};
  right: ${(props) => (props.visible ? "20px" : "10px")};
  width: 40px;
  height: 40px;
  background-color: #ff6565; 
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.4s ease;
  z-index: 1000;

  &:hover {
    background-color: #ff3232; 

  }
`;

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollPos, setLastScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos < lastScrollPos && currentScrollPos > 200) {
            // Show when scrolling up and scrolled down more than 200px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        setLastScrollPos(currentScrollPos);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollPos]);

    return (
        <ScrollButton visible={isVisible} onClick={scrollToTop}>
            <IoChevronUpOutline style={{ fontSize: '18px' }} />
        </ScrollButton>
    );
};

export default ScrollToTop;
