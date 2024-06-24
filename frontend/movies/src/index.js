import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.baseURL =
  process.env.REACT_APP_BASE_URL || "http://localhost:4000";
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
