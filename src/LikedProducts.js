import React from 'react';

const LikedProducts = () => {

  return (
    <div className="liked-products">
      <h2>Liked Products</h2>
      {/* {likedProducts.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
        </div>
      ))} */}
    </div>
  );
};

export default LikedProducts;