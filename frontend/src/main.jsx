import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <BrowserRouter>
    <CssBaseline />
      <App />
    </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);