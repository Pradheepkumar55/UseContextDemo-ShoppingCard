import React, { useState } from "react";
import Data from "../../Data.json";
import Product from "../Components/Product";

const Products = () => {
  const [products, setproducts] = useState(Data.products);
  return (
    <div className="container mt-5">
      <div className="row g-2">
        {products.map((p) => (
          <Product product={p} />
        ))}
      </div>
    </div>
  );
};

export default Products;
