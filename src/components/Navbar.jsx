import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            <div className="relative w-[600px] h-[300px] bg-white rounded-2xl">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3"
              >
                <i class="bx bx-x text-xl"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
