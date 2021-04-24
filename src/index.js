import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import moag from "../src/moag.jpg";
import Pic from "./components/pic";
import "./index.css";
import App from "./App";
import Form from "./components/form";
import NavBar from "./components/nav-bar";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div className="container">
    <NavBar />
    <Pic />
    <Form />
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
