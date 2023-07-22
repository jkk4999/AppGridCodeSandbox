import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@infinite-table/infinite-react/index.css";

import App from "./src/App";
import "./styles.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
