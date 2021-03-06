import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { UserProvider } from "./contexts/UserContext";
import { FeedProvider } from "./contexts/FeedContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <FeedProvider>
        <App />
      </FeedProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
