import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from './Components/utils/useAuthClient';
import App from "./App";
import '../assets/main.css';

ReactDOM.render(
    <BrowserRouter>
        {/* <AuthProvider> */}
            <App />
        {/* </AuthProvider> */}
    </BrowserRouter>,
    document.getElementById("root")
);