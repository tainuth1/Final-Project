import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ProductContext);

  return (
    <div className="rounded-lg p-3 bg-white border border-gray-200 shadow hover:shadow-2xl">
      <div className="w-full h-[250px] overflow-hidden">
        <img
          className="w-full h-full object-cover transition-all hover:scale-105"
          src={product.image}
          alt=""
        />
      </div>
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm my-1 text-gray-500 line-clamp-1">
        {product.description}
      </p>
      <div className="text-yellow-500 flex items-center gap-1">
        <i class="bx bxs-star text-lg"></i>
        <i class="bx bxs-star text-lg"></i>
        <i class="bx bxs-star text-lg"></i>
        <i class="bx bxs-star text-lg"></i>
        <i class="bx bx-star text-lg"></i>
        <span className="text-black">(356)</span>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl my-2 font-semibold text-yellow-600">$399.99</h3>
        <span className="text-xs bg-slate-200 py-1 px-2 rounded-sm">
          Electronics
        </span>
      </div>
      <button 
        onClick={()=> addToCart(product.id)}
        className="rounded-md bg-gray-900 w-full text-white flex items-center justify-center gap-5 py-2"
      >
        <i class="bx bx-cart text-xl"></i>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
