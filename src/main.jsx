import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { AuthProvider } from "./context/AuthContext";
import { JurusanProvider } from "./context/JurusanContext.jsx";
import { AsesiProvider } from "./context/AsesiContext.jsx";
import { AsesorProvider } from "./context/AsesorContext.jsx";
import { AssesmentProvider } from "./context/AssesmentContext.jsx";
import { SkemaProvider } from "./context/SkemaContext.jsx";
import { Apl01Provider } from "./context/Apl01Context.jsx";
import { DashboardAsesiProvider } from "./context/DashboardAsesiContext.jsx"; // Import DashboardAsesiProvider

const AppProviders = ({ children }) => (
  <AuthProvider>
    <DashboardAsesiProvider>
      <AsesiProvider>
        <AsesorProvider>
          <AssesmentProvider>
            <JurusanProvider>
              <SkemaProvider>
                <Apl01Provider>{children}</Apl01Provider>
              </SkemaProvider>
            </JurusanProvider>
          </AssesmentProvider>
        </AsesorProvider>
      </AsesiProvider>
    </DashboardAsesiProvider>
  </AuthProvider>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProviders>
    <App />
  </AppProviders>
);
