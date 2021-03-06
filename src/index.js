import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "components/app";
import reportWebVitals from "./reportWebVitals";
import { Provider as StateProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "app-redux";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider store={store}>
      <Router>
        <App />
      </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
