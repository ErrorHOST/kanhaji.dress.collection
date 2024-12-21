const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, cart: [...state.cart, action.payload] };
  
      case 'LIKE_PRODUCT':
        return { ...state, likedProducts: [...state.likedProducts, action.payload] };
  
      case 'LOAD_PRODUCTS':
        return { ...state, products: action.payload };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;