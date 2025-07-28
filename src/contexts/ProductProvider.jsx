import React, { createContext, useState } from "react";
import { products as productData } from "./products.js";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);

  return (
    <>
      <ProductContext.Provider value={{ products }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductProvider;
