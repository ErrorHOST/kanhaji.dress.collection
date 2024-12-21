import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
import { products as productsData } from "../data/productsData";

const AppContext = createContext();

// const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const products = productsData; // Use local data
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = (id) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const singleProduct = productsData.find((product) => product.id === id); // Find product by ID
      if (!singleProduct) throw new Error("Product not found");
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(); // Load local products
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
