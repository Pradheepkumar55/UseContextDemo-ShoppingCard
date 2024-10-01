import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Contextprovider from "./Features/Contextprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Contextprovider>
    <App />
  </Contextprovider>
);
