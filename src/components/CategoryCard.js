import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  .product-category-item {
    border-radius: 10px;
    background-color: ${(props) => props.color};
    display: block;
    padding: 45px 15px 30px;
    height: 100%;
    position: relative;
    color: #364958;
    text-align: center;
    transition: all 0.5s ease 0s;
    line-height: #364958;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease 0s;

    &:hover {
      color: #ff6565;
      outline: none;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    }
  }

  .product-category-item:hover img {
    transform: rotateY(1turn);
  }

  .icon {
    width: 80px;
    height: 80px;
    // height: auto;
    max-width: 100%;
    overflow-clip-margin: content-box;
    overflow: clip;
    vertical-align: middle;
    margin-bottom: 43px;
    transition: all 0.8s ease 0s;
  }

  .product-category-item .title:before {
    background-color: #ff6565;
    content: "";
    height: 1px;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translate(-50%);
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -o-transform: translate(-50%);
    width: 25px;
  }

  .title {
    font-family: Inter, sans-serif;
    color: #1d4a21;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0;
    position: relative;
    padding-top: 11px;
    line-height: 1.2;
    margin-top: 0;
  }

  .flag-new {
    position: absolute;
    right: 20px;
    top: -35px;
    background-color: ${(props) => props.labelBg};
    border-radius: 50px;
    color: #fff;
    display: inline-block;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    padding: 22px 4px 22px 8px;
    -ms-writing-mode: tb-lr;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  }

  @media (max-width: 1200px) {
  .product-category-item .flag-new {
    font-size: 14px;
      -ms-writing-mode: inherit;
      writing-mode: inherit;
      padding: 6px 20px 8px;
      top: 10px;
      right: 10px;
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
}
  }
  @media only screen and (max-width: 575px) {
    .product-category-item .flag-new {
      font-size: 13px;
      padding: 0 15px 2px;
    }
  }
  @media only screen and (max-width: 767px) {
    .product-category-item .flag-new {
      font-size: 14px;
      -ms-writing-mode: inherit;
      writing-mode: inherit;
      padding: 6px 20px 8px;
      top: 10px;
      right: 10px;
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
    }
  }
`;

const CategoryCard = ({ color, label, image, title, labelBg }) => {
  return (
    <Wrapper color={color}  labelBg={labelBg}>
      <NavLink to="/product" className="product-category-item">
        <img className="icon" src={image} alt={title} />
        <h3 className="title">{title}</h3>
        {label && <span className="flag-new">{label}</span>}
      </NavLink>
    </Wrapper>
  );
};

export default CategoryCard;
