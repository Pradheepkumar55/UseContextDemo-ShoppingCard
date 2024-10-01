import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cardcontext } from "../Features/Contextprovider";

const Navebar = () => {
  const { cart } = useContext(Cardcontext);

  return (
    <div className="d-flex justify-content-between bg-secondary py-3 px-5">
      <Link to="/" className="navbar-brand text-white fs-4 fw-bolder">
        Shopping Area
      </Link>
      <Link
        to="/card"
        className="text-white navbar-brand fs-5"
        style={{
          border: "3px solid black",
          borderRadius: "10px",
          width: "150px",
          textAlign: "center",
          padding: "5px",
          cursor: "pointer",
        }}
      >
        {cart.length} View Cart
      </Link>
    </div>
  );
};

export default Navebar;
