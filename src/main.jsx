import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SignUpPage from "./SignUpPage.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SignUpPage />
  </React.StrictMode>
);