import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"
import Favicon from "react-favicon"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Favicon url="favicon.png" />
    <App />
  </React.StrictMode>
);
