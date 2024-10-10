import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import Star from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Star maxrating={5} />
    <Star maxrating={10}/>
    <Star/> */}
    <App/>
  </React.StrictMode>
);
