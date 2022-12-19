import React from "react";
import watcherSaga from "../../store/saga";
import { unitListReducer } from "../../Units/unitListSlice";

import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { unitDetailReducer } from "../../Unit/unitDetailSlice";

import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

let saga = createSagaMiddleware();

function render(
    ui,
    {
      preloadedState,
      store = configureStore({
        reducer: {
                units: unitListReducer,
                unit: unitDetailReducer
              },
        middleware:[saga],
        preloadedState,
      }),
      ...renderOptions
    } = {}
  ) {
    function Wrapper({ children }) {
      return (
        <Provider store={store}>
           <Router>{children}</Router>
        </Provider>
      );
    }
    saga.run(watcherSaga);
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
  }
  
  
  // re-export everything
  export * from "@testing-library/react";
  // override render method
  export { render };

// const store = configureStore({
//   reducer: {
//     units: unitListReducer,
//     unit: unitDetailReducer
//   },
//   middleware:[saga]
// });
// saga.run(watcherSaga);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

