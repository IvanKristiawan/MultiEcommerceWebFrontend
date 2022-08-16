import React from "react";
import ReactDOM from "react-dom";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
