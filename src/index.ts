import "./css/index.css";

import * as app from "./js/app";

import { createRoot } from "react-dom/client";

function init() {
  const root = createRoot(document.getElementById("app"));
  root.render(app.App());
}
// Render your React component instead

init();
