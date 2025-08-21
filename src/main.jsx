import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { AuthProvider } from "./context/AuthContext";
import { JurusanProvider } from "./context/JurusanContext.jsx"; // Import JurusanProvider
import { AsesiProvider } from "./context/AsesiContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <JurusanProvider>
        <AsesiProvider>
          <App />
        </AsesiProvider>
      </JurusanProvider>
    </AuthProvider>
  </React.StrictMode>
);
