import React from "react";
import ReactDOM from "react-dom/client";
import AdminRouter from "./AdminRouter.jsx";
import "./sass/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminRouter />
  </React.StrictMode>
);
