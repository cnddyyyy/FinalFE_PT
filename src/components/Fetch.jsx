import React, { useEffect, useState } from "react";
import Product from "./product";

export default function Fetch() {
  const [data, setData] = useState([]); // Berikan nilai awal

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error)); // Error handling
  }, []); // Array kosong agar hanya dijalankan sekali

  const filteredData = data.filter((item) =>
    ["men's clothing", "jewelery", "women's clothing"].includes(item.category)
  );
  console.log(filteredData); 

  return (
    <> 
     {/* Judul Section */}
    <h1 className="text-2xl font-bold text-center mt-8 mb-2 text-black">Our Products</h1>
    <h1 className="text-l font-normal text-center mt-2 mb-8 text-black">Let's Pick Your Clothes</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4">
      {filteredData.map((item, index) => (
        <div key={index}>
          <Product
            data={item}
            img={item?.image}
            id={item?.id}
            judul={item?.title}
            harga={item?.price}
            rating={item?.rating.rate}
            rate={item?.rating.count}
            detail={item?.description}
            />
        </div>
      ))}
    </div>
      </>
  );
}
