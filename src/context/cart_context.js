import React, { createContext, useContext, useReducer } from 'react';
import cartReducer from '../reducer/cartReducer';

const CartContext = createContext();

const initialState = {
  cart: [],
  likedProducts: [],
  products: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Add product to cart
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // Like a product
  const likeProduct = (product) => {
    dispatch({ type: 'LIKE_PRODUCT', payload: product });
  };

  // Load products
  const loadProducts = (products) => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: products });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, likeProduct, loadProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};