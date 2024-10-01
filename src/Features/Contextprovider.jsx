import React, { useReducer } from "react";
import { createContext } from "react";
import Cardreducer from "./Cardreducer";

export const Cardcontext = createContext();

const Contextprovider = ({ children }) => {
  const [cart, dispatch] = useReducer(Cardreducer, []);
  return (
    <Cardcontext.Provider value={{ cart, dispatch }}>
      {children}
    </Cardcontext.Provider>
  );
};

export default Contextprovider;
