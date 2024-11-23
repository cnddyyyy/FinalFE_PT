import { stringify } from "postcss";
import React from "react";

export default function Product({img, id, key, judul, data, harga, rating, rate,}) {

  const handleButton = (ev) => {
    ev.preventDefault();
    
    localStorage.setItem(id, JSON.stringify(data))

  };
  

  return (


    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
  
    {/* Gambar */}
    <img src={img} alt={img} className="w-32 h-32 object-contain mx-auto" />
  
    {/* Judul */}
    <h2 className="text-lg font-semibold text-center mt-2">{judul}</h2>
  
    <div className="flex-grow"></div> {/* Ensures content alignment */}
  
    {/* Rating, Harga, and Add to Cart */}
    <div className="flex items-center justify-between w-full mt-4">
      <div className="flex flex-col items-start">
        {/* Rating */}
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="gold"
            viewBox="0 0 24 24"
            stroke="gold"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
          <span className="text-blue-900 text-sm font-medium">{rating}</span>
        </div>
  
        {/* Harga */}
        <div className="flex items-center space-x-1 mt-2">
          <span className="text-gray-800 text-xl">$</span>
          <span className="text-xl font-bold text-gray-800">{harga}</span>
        </div>
      </div>
  
      {/* Tombol Add to Cart */}
      <button 
      onClick={handleButton}
      className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-black">
        Add to Cart
      </button>
    </div>
  </div>
  );
}
