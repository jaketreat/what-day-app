import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Create root (React 18+ way)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

