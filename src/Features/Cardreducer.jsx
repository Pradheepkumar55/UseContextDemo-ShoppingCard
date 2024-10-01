export const totalitem = (cart) => {
  return cart.reduce((total, item) => total + item.rating.count, 0);
};

export const totalprice = (cart) => {
  return cart
    .reduce((total, item) => total + item.price * item.rating.count, 0)
    .toFixed(2);
};

const Cardreducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.product];
    case "Remove":
      return state.filter((item) => item.id !== action.id);

    case "Decrease":
      const indexD = state.findIndex((item) => item.id === action.id);
      state[indexD].rating.count -= 1;
      return [...state];

    case "Increase":
      const indexI = state.findIndex((item) => item.id === action.id);
      state[indexI].rating.count += 1;
      return [...state];

    default:
      return state;
  }
};

export default Cardreducer;
