import { render } from "preact";
import "./index.css";
import React from "preact/compat";
import AppRouter from "./app/Router.tsx";
import { RouterProvider } from "react-router-dom";

render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>,
  document.getElementById("app")!
);
