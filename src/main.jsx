import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { OutbuildApp } from "./OutbuildApp.jsx";

import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OutbuildApp />
  </StrictMode>
);
