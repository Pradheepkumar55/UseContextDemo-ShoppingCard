import React, { useContext } from "react";
import { Cardcontext } from "../Features/Contextprovider";

const CardProducts = ({ product }) => {
  const { cart, dispatch } = useContext(Cardcontext);
  const Increase = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (cart[index].rating.count < 10) {
      dispatch({
        type: "Increase",
        id,
      });
    }
  };
  const Decrease = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (cart[index].rating.count > 1) {
      dispatch({
        type: "Decrease",
        id,
      });
    }
  };
  return (
    <div className="d-flex border mt-4">
      <img
        src={product.image}
        alt=""
        style={{ height: "15rem", width: "10rem" }}
      />
      <div className="detail ms-4">
        <h4>{product.title}</h4>
        <h5>${product.price}</h5>
        <div className="buttons">
          <button
            className="px-2 , rounded-circle"
            onClick={() => {
              Decrease(product.id);
            }}
          >
            <b>-</b>
          </button>
          <button className="px-2 , rounded">{product.rating.count}</button>
          <button
            className="px-2 , rounded-circle"
            onClick={() => {
              Increase(product.id);
            }}
          >
            <b>+</b>
          </button>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "Remove", id: product.id })}
        >
          Remove
        </button>
      </div>
      {/* <div className="price">
        <h4>${product.price * product.quantity}</h4>
      </div> */}
    </div>
  );
};

export default CardProducts;
