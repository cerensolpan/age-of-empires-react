import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/global.scss";
import App from "./App";
import watcherSaga from "./store/saga";
import { unitListReducer } from "./Units/unitListSlice";

import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { unitDetailReducer } from "./Unit/unitDetailSlice";

let saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    units: unitListReducer,
    unit: unitDetailReducer
  },
  middleware:[saga]
});
saga.run(watcherSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

