import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Color from "./components/Colors";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>

  </StrictMode>,
);
