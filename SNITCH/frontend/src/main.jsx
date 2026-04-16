import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./index.css";

// ✅ Redux imports
import { Provider } from "react-redux";
import { store } from "../src/features/auth/state/auth.slice.js"; // check path

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);