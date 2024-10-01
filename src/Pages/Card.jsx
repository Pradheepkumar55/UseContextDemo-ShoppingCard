import React, { useContext } from "react";
import { Cardcontext } from "../Features/Contextprovider";
import CardProducts from "../Components/CardProducts";
import { totalitem, totalprice } from "../Features/Cardreducer";

const Card = () => {
  const { cart } = useContext(Cardcontext);
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          {cart.map((p) => (
            <CardProducts product={p} />
          ))}
        </div>
        <div className="col-4">
          <div className="bg-secondary mt-4 p-2 text-white">
            <h5>Total Items : {totalitem(cart)} </h5>
            <h5>Total Price : ${totalprice(cart)} </h5>
            <button className="btn btn-success">Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
