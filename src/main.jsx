import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App.jsx";
import Header from "./containers/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <Provider store={store}>
            <Header />
            <RouterProvider router={appRouter} />
        </Provider>
    </>
);
