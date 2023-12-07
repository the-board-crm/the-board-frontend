import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './css/index.css'
import { AuthProviderWrapper } from "./context/auth.context.jsx";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderWrapper>
        <App />
      </AuthProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
