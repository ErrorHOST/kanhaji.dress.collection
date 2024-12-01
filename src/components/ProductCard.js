import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart, toggleLikeProduct, isLiked }) => {
  return (
    <>
      <div
        style={{
          margin: "5px",
          display: "inline-block",
          border: "1px solid #D2D2D2",
          boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
          overflow: "hidden",
          borderRadius: "0.25rem",
        }}
      >
        <div
          style={{
            height: "230px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderBottom: "1px solid #D2D2D2",
          }}
        >
          <img src={product.image} width={200} alt={product.name} />
        </div>
        <div
          class="card-body pt-2"
          style={{  background: "#F7F7F7" }}
        >
          <h6
            class="card-title mx-3"
            style={{
              height: "40px",
              overflow: "hidden",
              display: "-webkit-box",
              "-webkit-line-clamp": "2",
              textOverflow: "ellipsis",
              "-webkit-box-orient": "vertical",
              color: "#4a5760",
            }}
          >
            {product.name}
          </h6>
          <p class="card-text mx-3 my-3" style={{ fontWeight: "500" }}>
            Rs. {product.price.toFixed(2)}
          </p>
          <div className="pb-3" style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
          <Link
            to={`/products/${product.id}`}
            class="btn btn-primary btn-sm mx-3"
            style={{ background: "#FF7B00", borderColor: "#FF7B00" }}
          >
            View Detail
          </Link> <button onClick={() => addToCart(product)} style={{cursor:'pointer',}}><img src="addtocart.png" width={30}/></button><button onClick={() => toggleLikeProduct(product.id)}>{isLiked ? <img src="like.svg" width={30}/> : <img src="unlike.svg" width={30}/>}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
