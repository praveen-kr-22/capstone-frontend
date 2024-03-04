import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { userStore } from "./store/userAuth-slice";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={userStore}>
    <App />
  </Provider>
);
