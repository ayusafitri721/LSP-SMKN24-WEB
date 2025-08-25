import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { AuthProvider } from "./context/AuthContext";
import { JurusanProvider } from "./context/JurusanContext.jsx"; // Import JurusanProvider
import { AsesiProvider } from "./context/AsesiContext.jsx";
import Asesor from "./Asesor/Asesor.jsx";
import { AsesorProvider } from "./context/AsesorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <JurusanProvider>
        <AsesiProvider>
          <AsesorProvider>
            <App />
          </AsesorProvider>
        </AsesiProvider>
      </JurusanProvider>
    </AuthProvider>
  </React.StrictMode>
);
