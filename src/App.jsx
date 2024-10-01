import React from "react";
import Navebar from "./Components/Navebar";
import Products from "./Pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Card from "./Pages/Card";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
