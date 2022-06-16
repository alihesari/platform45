import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./router";
import "./style.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
