import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductProvider";

const Product = () => {
  const { products } = useContext(ProductContext);
  //   const [category, setCategory] = useState([]);
  let category = ["All"];

  products.filter((product) => {
    if (!category.includes(product.category)) {
      category.push(product.category);
    }
  });

  return (
    <div>
      <div className="w-[1200px] m-auto">
        <div className="flex gap-5 flex-wrap">
          {category.map((cate) => (
            <button className="text-lg font-medium bg-white hover:bg-slate-100 px-5 py-2 border-gray-300 rounded-md border">{cate}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
