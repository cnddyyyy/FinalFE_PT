import React from "react";

export default function Hero() {
return (
    <div
    className="relative w-full h-screen bg-cover bg-center"
    style={{
        backgroundImage: `url('https://i.pinimg.com/736x/55/29/dc/5529dcb1fac7a3bec22a32804210d24c.jpg')`,
    }}
    >
      {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Crafted to <br /> seamlessly <br /> blend fashion with <br /> function
        </h1>
        <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
        Let's See Our Products
        </button>
    </div>
    </div>
);
}
