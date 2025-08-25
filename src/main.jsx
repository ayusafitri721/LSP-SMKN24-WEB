import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { AuthProvider } from "./context/AuthContext";
import { JurusanProvider } from "./context/JurusanContext.jsx"; // Import JurusanProvider
import { AsesiProvider } from "./context/AsesiContext.jsx";
import Asesor from "./Asesor/Asesor.jsx";
import { AsesorProvider } from "./context/AsesorContext.jsx";
import { AssesmentProvider } from "./context/AssesmentContext.jsx";
import { SkemaProvider } from "./context/SkemaContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <JurusanProvider>
        <AsesiProvider>
          <AsesorProvider>
            <AssesmentProvider>
              <JurusanProvider>
                <SkemaProvider>
                <App />
                </SkemaProvider>
              </JurusanProvider>
            </AssesmentProvider>
          </AsesorProvider>
        </AsesiProvider>
      </JurusanProvider>
    </AuthProvider>
  </React.StrictMode>
);
