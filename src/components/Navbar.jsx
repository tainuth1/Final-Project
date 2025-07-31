import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductProvider";

const Navbar = () => {
  const { carts, setCarts } = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const increase = (id) => {
    setCarts(
      carts.map((cart) =>
        cart.id == id ? { ...cart, quantity: cart.quantity + 1 } : cart
      )
    );
  };

  const decrease = (id) => {
    setCarts(
      carts.map((cart) => {
        if (cart.id === id) {
          const newQuantity = Math.max(0, cart.quantity - 1);
          return { ...cart, quantity: newQuantity };
        }
        return cart;
      })
    );
  };

  useEffect(() => {
    let totalAmount = 0;
    carts.forEach((pro) => {
      totalAmount += pro.quantity * pro.price;
    });
    setTotal(totalAmount);
  });

  const removeCart = (id) => {
    setCarts(carts.filter((cart) => cart.id != id));
  };

  return (
    <div className="bg-white py-3 shadow-lg">
      <div className="w-[1200px] m-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <i class="bx bxs-store text-4xl text-blue-600"></i>
          <h1 className="text-3xl font-bold">Shop</h1>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-800 hover:bg-slate-100 flex items-center gap-3 border border-gray-400 px-4 py-1 rounded-md"
        >
          <i class="bx bxs-shopping-bag text-lg"></i>
          Cart
        </button>
        {isOpen && (
          <div className="fixed flex justify-center items-center left-0 top-0 w-full h-screen bg-[#00000065]">
            <div className="relative w-[750px] min-h-[300px] bg-white rounded-2xl p-5">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3"
              >
                <i class="bx bx-x text-xl"></i>
              </button>

              <h2 className="text-2xl font-semibold">Shopping Cart</h2>
              <div className="mt-3 flex flex-col gap-4">
                {carts.map((product) => (
                  <div className="flex items-center justify-between gap-5 border border-gray-300 p-3 rounded">
                    <div className="flex items-center gap-3">
                      <img className="w-[70px]" src={product.image} alt="" />
                      <div>
                        <h2 className="text-lg font-medium">{product.name}</h2>
                        <h3 className="text-gray-500">${product.price}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        disabled={product.quantity == 0}
                        onClick={() => decrease(product.id)}
                        className="w-9 h-9 rounded-md border-gray-300 hover:bg-slate-100 text-2xl border"
                      >
                        -
                      </button>
                      <span className="text-lg">{product.quantity}</span>
                      <button
                        onClick={() => increase(product.id)}
                        className="w-9 h-9 rounded-md border-gray-300 hover:bg-slate-100 text-2xl border"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-5">
                      <h3 className="text-xl font-semibold">
                        ${(product.price * product.quantity).toFixed(2)}
                      </h3>
                      <button
                        onClick={() => removeCart(product.id)}
                        className="text-red-500"
                      >
                        <i class="bx bx-trash text-xl"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t py-3">
                <h1 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h1>
                <button
                  onClick={() => setCarts([])}
                  className="mt-2 w-full bg-gray-900 py-2 text-white rounded-md"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
