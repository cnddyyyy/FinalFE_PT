import React from "react";
import { Search, ShoppingBag, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleCartButton = () => {
    navigate("/keranjang");
  };
  const handleHomeButton = () => {
    navigate("/");
  };

  const handleBerandaButton = () => {
    navigate("/beranda");
  };

  return (
    <>
      <header className="bg-black shadow-md">
        <div className="max-w-screen-xl flex justify-between mx-auto p-4">
          {/* Logo */}
          <div className="text-left text-3xl font-bold text-white">
            CLAIR STYLE
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <button
              className="text-white text-xl hover:text-stone-400"
              onClick={handleBerandaButton}
            >
              Beranda
            </button>
            <button className="text-white text-xl hover:text-stone-400">
              Men
            </button>
            <button className="text-white text-xl hover:text-stone-400">
              Women
            </button>
            <button className="text-white text-xl hover:text-stone-400">
              Accessories
            </button>
          </div>

          {/* Search Bar, Account, and Cart buttons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search Product"
                className="w-full p-2 pl-10 border rounded-md focus:outline-none"
              />
              <button className="absolute left-2 top-1/2 transform -translate-y-1/2">
                <Search className="text-black w-4 h-4" />
              </button>
            </div>

            {/* Account, Exit Cart buttons */}
            <div className="flex space-x-4">
              <button className="w-8 h-8 flex items-center justify-center">
                <User className="text-white w-6 h-6" />
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center"
                onClick={handleCartButton}>
                <ShoppingBag className="text-white w-6 h-6" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center">
              <LogOut
                  className="text-white w-6 h-6"
                  onClick={handleHomeButton}
                />
                </button>

            </div>
          </div>
        </div>
      </header>
    </>
  );
}
