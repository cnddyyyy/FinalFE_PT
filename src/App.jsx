import React from "react";
import "./App.css";  
import Fetch from "./components/fetch";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Beranda from "./pages/Beranda";
import Footer from "./components/footer";


function App() {
  return (
    <div>
      
      <Navbar/>
      <Hero/>
      <Fetch /> 
      <Footer/>

    </div>
  );
}
export default App;
