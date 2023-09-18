import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

// Store data sent by/to backend for further use
const store = configureStore({ reducer: reducers }, compose(applyMiddleware(thunk)));

root.render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>
);