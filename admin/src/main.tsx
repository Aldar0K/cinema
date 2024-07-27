import { App } from "@/app";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "@/styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
