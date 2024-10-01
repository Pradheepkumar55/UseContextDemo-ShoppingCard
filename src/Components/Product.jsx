import React, { useContext } from "react";
import { Cardcontext } from "../Features/Contextprovider";

const Product = ({ product }) => {
  const { dispatch } = useContext(Cardcontext);
  return (
    <div className="col">
      <div className="card" style={{ width: "25rem", height: "42rem" }}>
        <img
          src={product.image}
          className="card-img-top"
          style={{ height: "20rem", width: "20rem" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Product Name : {product.title}</h5>
          <h4 className="card-title"> Product Price : ${product.price}</h4>
          <p className="card-text">{product.description}</p>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "Add", product: product })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
