import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";

const PageNavigation = ({ title }) => {
  const { filter_products } = useFilterContext();
  return (
    <Wrapper>
      <div>
        <NavLink to="/">Home</NavLink> / <span>{title}</span> <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <p>All Products</p>
          <span className="span2">{`Showing ${filter_products.length} Results`}</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 150px;
  background-color: #f6f8fa;
  background-color: #FFF3DA;
  font-size: 2rem;
  padding-left: 1.2rem;
  margin-top: 4.5%;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 6%;

  }
  a {
  display: inline-block;
    font-size: 1.5rem;
    margin-top: 40px;
    margin-left: 100px;
    @media (max-width: 768px) {
      // font-size: 2rem;
    margin-top: 50px;
    margin-left: 15px;
    }
  }
  span{
  font-size: 1.5rem;
  }
  p {
  font-size: 30px;
    display:inline-block;
    margin-top: 10px;
    margin-left: 100px;
    @media (max-width: 768px) {
    font-size: 25px;
    margin-top: 20px;
    margin-left: 15px;
    }
  }
  .span2{
  font-size:16.5px;
  color:#4A4A4A;
  float:right;
  margin-right:100px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size:16.5px;
    margin-top: 20px;
    margin-right:15px;
  }
}
`;
export default PageNavigation;
