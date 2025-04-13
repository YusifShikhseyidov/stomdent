import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LocaleProvider from "./components/LocaleContext";

import "./i18n"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </React.StrictMode>
);
