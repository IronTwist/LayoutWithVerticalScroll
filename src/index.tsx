import React from "react";
import ReactDOM from "react-dom/client";
import LayoutWithVerticalScroll from "./layout/layout-with-vertical-scroll";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <LayoutWithVerticalScroll />
  </React.StrictMode>
);
