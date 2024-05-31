import "./css/index.css";

import * as app from "./js/app";

import { createRoot } from "react-dom/client";
import { App } from "./js/app";
import * as React from "react";
import { StrictMode } from "react";

function init() {
  const root = createRoot(document.getElementById("app"));
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
// Render your React component instead

init();
