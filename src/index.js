import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/global.scss";
import App from "./App";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import combineReducers from "./store";
import watcherSaga from "./store/saga";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
