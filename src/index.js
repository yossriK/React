import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
// instantiate our store here and use companion library to have store accessible to all application
import configureStore from "./redux/configureStore";
import {Provider as ReduxProvider} from "react-redux"; // used to provide redux stroe data to child components

const store = configureStore(); // we didnt pass initial state here so we usiing the defualt. its in case we want to override defualt params

render(
  <ReduxProvider store={store}>
  <Router>
    <App />
  </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
